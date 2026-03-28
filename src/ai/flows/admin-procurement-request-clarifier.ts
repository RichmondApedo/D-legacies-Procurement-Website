'use server';
/**
 * @fileOverview An AI tool for administrators to analyze procurement requests, identify ambiguities,
 *               and suggest follow-up questions to clients.
 *
 * - adminProcurementRequestClarifier - A function that handles the AI-powered request clarification process.
 * - AdminProcurementRequestClarifierInput - The input type for the adminProcurementRequestClarifier function.
 * - AdminProcurementRequestClarifierOutput - The return type for the adminProcurementRequestClarifier function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdminProcurementRequestClarifierInputSchema = z.object({
  businessName: z.string().describe('The name of the client\'s business.'),
  contactDetails: z.string().describe('Contact information for the client (e.g., name, email, phone).'),
  goodsServicesNeeded: z.string().describe('A brief description of the goods or services the client needs.'),
  procurementDescription: z.string().describe('Detailed description of the procurement request, including specifications and requirements.'),
  budget: z.string().describe('The client\'s estimated budget for the procurement.'),
  timeline: z.string().describe('The client\'s desired timeline for the procurement.'),
  fileAttachments: z.array(z.string()).optional().describe('Optional list of file attachment data URIs (e.g., data:image/png;base64,...) if available. Note: AI may not fully process complex document types.'),
});
export type AdminProcurementRequestClarifierInput = z.infer<typeof AdminProcurementRequestClarifierInputSchema>;

const AdminProcurementRequestClarifierOutputSchema = z.object({
  summaryOfRequest: z.string().describe('A concise summary of the procurement request.'),
  identifiedAmbiguities: z.array(z.string()).describe('A list of points in the request that are unclear, missing, or ambiguous.'),
  suggestedQuestions: z.array(z.string()).describe('Specific follow-up questions to ask the client to clarify the request.'),
});
export type AdminProcurementRequestClarifierOutput = z.infer<typeof AdminProcurementRequestClarifierOutputSchema>;

export async function adminProcurementRequestClarifier(input: AdminProcurementRequestClarifierInput): Promise<AdminProcurementRequestClarifierOutput> {
  return adminProcurementRequestClarifierFlow(input);
}

const clarifyPrompt = ai.definePrompt({
  name: 'procurementClarifierPrompt',
  input: {schema: AdminProcurementRequestClarifierInputSchema},
  output: {schema: AdminProcurementRequestClarifierOutputSchema},
  prompt: `You are an AI assistant for D'LEGACIES E-PROCUREMENT CONSULT. Your task is to analyze procurement requests submitted by clients, identify any missing or ambiguous information, and suggest precise follow-up questions to clarify the request.
Also provide a concise summary of the request.

Analyze the following procurement request from a client:

Business Name: {{{businessName}}}
Contact Details: {{{contactDetails}}}
Goods/Services Needed: {{{goodsServicesNeeded}}}
Procurement Description: {{{procurementDescription}}}
Budget: {{{budget}}}
Timeline: {{{timeline}}}

{{#if fileAttachments}}
Note: The client has provided file attachments, but your current analysis is based solely on the text provided.
{{/if}}

Instructions:
1. Provide a concise summary of the request.
2. List any identified ambiguities, missing information, or unclear points from the request.
3. Suggest specific, actionable follow-up questions to the client that would help clarify these ambiguities.
`,
});

const adminProcurementRequestClarifierFlow = ai.defineFlow(
  {
    name: 'adminProcurementRequestClarifierFlow',
    inputSchema: AdminProcurementRequestClarifierInputSchema,
    outputSchema: AdminProcurementRequestClarifierOutputSchema,
  },
  async (input) => {
    const {output} = await clarifyPrompt(input);
    if (!output) {
      throw new Error('Failed to generate clarification for the procurement request.');
    }
    return output;
  },
);
