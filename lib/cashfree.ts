import crypto from 'crypto';

export function getCashfreeConfig() {
  const rawAppId = (process.env.CASHFREE_APP_ID || '').trim().replace(/^['"]|['"]$/g, '');
  const rawSecretKey = (process.env.CASHFREE_SECRET_KEY || '').trim().replace(/^['"]|['"]$/g, '');

  const hasTestKeys = rawAppId.toUpperCase().startsWith('TEST') || rawSecretKey.toLowerCase().includes('test');
  const hasProdKeys = Boolean(rawAppId && rawSecretKey && !hasTestKeys);

  let envRaw = (process.env.CASHFREE_ENV || process.env.NEXT_PUBLIC_CASHFREE_ENV || '').trim().replace(/^['"]|['"]$/g, '').toUpperCase();

  // If credentials are live production keys, ALWAYS enforce PRODUCTION mode
  // Even if CASHFREE_ENV in Vercel was previously set to SANDBOX!
  if (hasProdKeys) {
    envRaw = 'PRODUCTION';
  } else if (hasTestKeys) {
    envRaw = 'SANDBOX';
  } else if (!envRaw) {
    envRaw = 'PRODUCTION';
  }

  const isProduction = envRaw === 'PRODUCTION';
  const baseUrl = isProduction
    ? 'https://api.cashfree.com/pg'
    : 'https://sandbox.cashfree.com/pg';
  const apiVersion = (process.env.CASHFREE_API_VERSION || '2023-08-01').trim().replace(/^['"]|['"]$/g, '');

  return {
    appId: rawAppId,
    secretKey: rawSecretKey,
    env: isProduction ? 'PRODUCTION' : 'SANDBOX',
    isProduction,
    baseUrl,
    apiVersion,
  };
}

export function getCashfreeBaseUrl(): string {
  return getCashfreeConfig().baseUrl;
}

export interface CreateOrderPayload {
  orderId: string;
  orderAmount: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  returnUrl: string;
  notifyUrl?: string;
}

export async function createCashfreeOrder(payload: CreateOrderPayload) {
  const config = getCashfreeConfig();

  if (!config.appId || !config.secretKey) {
    const errorMsg = 'Cashfree credentials missing: CASHFREE_APP_ID or CASHFREE_SECRET_KEY is not defined in the environment.';
    console.error(errorMsg);
    throw new Error(errorMsg);
  }

  // Key vs Environment validation
  if (config.isProduction && (config.appId.toUpperCase().startsWith('TEST') || config.secretKey.includes('_test_'))) {
    const errorMsg = 'Cashfree credentials mismatch: CASHFREE_ENV is PRODUCTION, but CASHFREE_APP_ID or CASHFREE_SECRET_KEY are TEST credentials. Please configure your live Cashfree Production API keys in your hosting environment variables.';
    console.error(errorMsg);
    throw new Error(errorMsg);
  }

  const url = `${config.baseUrl}/orders`;

  // Clean customer phone (ensure valid string)
  const cleanPhone = payload.customerPhone.replace(/\D/g, '').slice(-10) || '9999999999';
  const customerId = `cust_${cleanPhone}_${Date.now().toString().slice(-4)}`;

  const body = {
    order_id: payload.orderId,
    order_amount: payload.orderAmount,
    order_currency: 'INR',
    customer_details: {
      customer_id: customerId,
      customer_name: payload.customerName || 'Divya Yogam Member',
      customer_email: payload.customerEmail || 'member@divyayogam.org',
      customer_phone: cleanPhone,
    },
    order_meta: {
      return_url: payload.returnUrl,
      ...(payload.notifyUrl ? { notify_url: payload.notifyUrl } : {}),
    },
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'x-client-id': config.appId,
      'x-client-secret': config.secretKey,
      'x-api-version': config.apiVersion,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error('Cashfree Create Order Error:', {
      status: response.status,
      env: config.env,
      baseUrl: config.baseUrl,
      appIdPrefix: config.appId ? config.appId.substring(0, 8) + '...' : 'empty',
      data,
    });

    if (response.status === 401 || (data.message && String(data.message).toLowerCase().includes('authentication'))) {
      throw new Error(
        `Cashfree Authentication Failed in ${config.env} mode. Please verify CASHFREE_APP_ID and CASHFREE_SECRET_KEY in your hosting environment variables match your Cashfree ${config.env} merchant account, and that IP Whitelist is disabled in Cashfree Merchant Dashboard.`
      );
    }

    throw new Error(data.message || 'Failed to create Cashfree order');
  }

  return {
    ...data,
    cashfreeMode: config.isProduction ? 'production' : 'sandbox',
  };
}

export async function getCashfreeOrderDetails(orderId: string) {
  const config = getCashfreeConfig();
  const url = `${config.baseUrl}/orders/${orderId}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-client-id': config.appId,
      'x-client-secret': config.secretKey,
      'x-api-version': config.apiVersion,
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!response.ok) {
    console.error('Cashfree Get Order Error:', {
      status: response.status,
      env: config.env,
      orderId,
      data,
    });
    throw new Error(data.message || 'Failed to fetch Cashfree order details');
  }
  return data;
}

export function verifyCashfreeWebhookSignature(
  rawBody: string,
  timestamp: string,
  signature: string
): boolean {
  if (!signature || !timestamp) return false;
  try {
    const config = getCashfreeConfig();
    const dataToSign = timestamp + rawBody;
    const computedSignature = crypto
      .createHmac('sha256', config.secretKey)
      .update(dataToSign)
      .digest('base64');
    return computedSignature === signature;
  } catch (err) {
    console.error('Webhook signature verification error:', err);
    return false;
  }
}
