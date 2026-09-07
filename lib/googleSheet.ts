export interface ContactSubmission {
  formType: 'contact';
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt?: string;
}

export interface VolunteerSubmission {
  formType: 'volunteer';
  fullName: string;
  email: string;
  phone: string;
  city: string;
  motivation: string;
  submittedAt?: string;
}

export async function sendToGoogleSheet(data: ContactSubmission | VolunteerSubmission): Promise<boolean> {
  const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL;
  
  const payload = {
    ...data,
    submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };

  if (!webhookUrl) {
    console.log('[GoogleSheet Integration] Webhook URL not configured in .env yet. Payload:', payload);
    return true;
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });
    return true;
  } catch (err) {
    console.error('[GoogleSheet Integration] Error sending payload:', err);
    return false;
  }
}
