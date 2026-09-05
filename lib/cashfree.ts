import crypto from 'crypto';

const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID || '';
const CASHFREE_SECRET_KEY = process.env.CASHFREE_SECRET_KEY || '';
const CASHFREE_ENV = process.env.CASHFREE_ENV || 'SANDBOX';
const CASHFREE_API_VERSION = process.env.CASHFREE_API_VERSION || '2023-08-01';

export function getCashfreeBaseUrl(): string {
  return CASHFREE_ENV.toUpperCase() === 'PRODUCTION'
    ? 'https://api.cashfree.com/pg'
    : 'https://sandbox.cashfree.com/pg';
}

export interface CreateOrderPayload {
  orderId: string;
  orderAmount: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  returnUrl: string;
}

export async function createCashfreeOrder(payload: CreateOrderPayload) {
  const url = `${getCashfreeBaseUrl()}/orders`;

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
    },
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'x-client-id': CASHFREE_APP_ID,
      'x-client-secret': CASHFREE_SECRET_KEY,
      'x-api-version': CASHFREE_API_VERSION,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error('Cashfree Create Order Error:', data);
    throw new Error(data.message || 'Failed to create Cashfree order');
  }

  return data;
}

export async function getCashfreeOrderDetails(orderId: string) {
  const url = `${getCashfreeBaseUrl()}/orders/${orderId}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-client-id': CASHFREE_APP_ID,
      'x-client-secret': CASHFREE_SECRET_KEY,
      'x-api-version': CASHFREE_API_VERSION,
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!response.ok) {
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
    const dataToSign = timestamp + rawBody;
    const computedSignature = crypto
      .createHmac('sha256', CASHFREE_SECRET_KEY)
      .update(dataToSign)
      .digest('base64');
    return computedSignature === signature;
  } catch (err) {
    console.error('Webhook signature verification error:', err);
    return false;
  }
}
