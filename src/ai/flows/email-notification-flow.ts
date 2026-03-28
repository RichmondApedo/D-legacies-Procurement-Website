'use server';
/**
 * @fileOverview A Genkit flow to generate professional email notification bodies for the admin.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EmailNotificationInputSchema = z.object({
  type: z.enum(['procurement_request', 'contact_message']),
  data: z.any().describe('The submission data to be summarized in the email.'),
});
export type EmailNotificationInput = z.infer<typeof EmailNotificationInputSchema>;

const EmailNotificationOutputSchema = z.object({
  subject: z.string().describe('The subject line for the notification email.'),
  body: z.string().describe('The HTML or plain text body for the notification email.'),
});
export type EmailNotificationOutput = z.infer<typeof EmailNotificationOutputSchema>;

export async function generateEmailNotification(input: EmailNotificationInput): Promise<EmailNotificationOutput> {
  return emailNotificationFlow(input);
}

const emailPrompt = ai.definePrompt({
  name: 'emailNotificationPrompt',
  input: {schema: EmailNotificationInputSchema},
  output: {schema: EmailNotificationOutputSchema},
  prompt: `You are an automated notification system for D'LEGACIES E-PROCUREMENT CONSULT.
Your job is to format incoming website submissions into a professional email for the business owner at dlegacies75@yahoo.com.

Submission Type: {{{type}}}
Submission Data: {{{json data}}}

Instructions:
1. Create a clear, urgent subject line.
2. Create a well-structured email body that highlights all key details (Sender, Business Name, Requirements, Contact Info).
3. Ensure the tone is corporate and professional.
4. Include a call to action to check the Admin Dashboard.
`,
});

const emailNotificationFlow = ai.defineFlow(
  {
    name: 'emailNotificationFlow',
    inputSchema: EmailNotificationInputSchema,
    outputSchema: EmailNotificationOutputSchema,
  },
  async (input) => {
    const {output} = await emailPrompt(input);
    if (!output) {
      throw new Error('Failed to generate email notification content.');
    }
    return output;
  },
);
