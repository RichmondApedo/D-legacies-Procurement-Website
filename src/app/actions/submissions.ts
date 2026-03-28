'use server';

/**
 * @fileOverview Server Actions for handling form submissions and email routing.
 */

import { generateEmailNotification } from '@/ai/flows/email-notification-flow';

const ADMIN_EMAIL = 'dlegacies75@yahoo.com';

export async function processSubmissionNotification(type: 'procurement_request' | 'contact_message', data: any) {
  try {
    // Generate the professional email content using Genkit
    const emailContent = await generateEmailNotification({
      type,
      data
    });

    // In a real production environment, you would use nodemailer or a service like Resend here.
    // Example: await resend.emails.send({ from: 'system@dlegacies.com', to: ADMIN_EMAIL, ...emailContent });
    
    console.log(`[SIMULATED EMAIL SENT TO: ${ADMIN_EMAIL}]`);
    console.log(`Subject: ${emailContent.subject}`);
    console.log(`Body: ${emailContent.body}`);

    return { success: true, emailedTo: ADMIN_EMAIL };
  } catch (error) {
    console.error('Failed to process submission notification:', error);
    return { success: false, error: 'Notification processing failed' };
  }
}
