'use server';

/**
 * @fileOverview Server Actions for handling form submissions and email routing.
 */

const ADMIN_EMAIL = 'dlegacies75@yahoo.com';

export async function processSubmissionNotification(type: 'procurement_request' | 'contact_message', data: any) {
  try {
    const subject = type === 'procurement_request' 
      ? `New Procurement Request: ${data.businessName || 'General'}`
      : `New Contact Message: ${data.senderName || 'Inquiry'}`;

    const body = `
      Type: ${type}
      From: ${data.senderName || 'Anonymous'} (${data.senderEmail || 'No Email'})
      Subject: ${data.subject || 'N/A'}
      Message: ${data.message || 'No content provided'}
      
      -- 
      D'LEGACIES E-PROCUREMENT CONSULT
    `;

    // In a real production environment, you would use nodemailer or a service like Resend here.
    // Example: await resend.emails.send({ from: 'system@dlegacies.com', to: ADMIN_EMAIL, subject, body });
    
    console.log(`[SIMULATED EMAIL SENT TO: ${ADMIN_EMAIL}]`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body}`);

    return { success: true, emailedTo: ADMIN_EMAIL };
  } catch (error) {
    console.error('Failed to process submission notification:', error);
    return { success: false, error: 'Notification processing failed' };
  }
}
