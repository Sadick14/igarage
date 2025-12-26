'use server';

/**
 * @fileOverview Estimates the duration of a car service based on service type and vehicle model.
 *
 * - estimateServiceDuration - A function that estimates the service duration.
 * - EstimateServiceDurationInput - The input type for the estimateServiceDuration function.
 * - EstimateServiceDurationOutput - The return type for the estimateServiceDuration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EstimateServiceDurationInputSchema = z.object({
  serviceType: z.string().describe('The type of car service requested.'),
  vehicleModel: z.string().describe('The model of the vehicle being serviced.'),
});
export type EstimateServiceDurationInput = z.infer<typeof EstimateServiceDurationInputSchema>;

const EstimateServiceDurationOutputSchema = z.object({
  estimatedDuration: z
    .string()
    .describe('The estimated duration of the service, in minutes.'),
  reasoning: z.string().describe('The reasoning behind the estimated duration.'),
});
export type EstimateServiceDurationOutput = z.infer<typeof EstimateServiceDurationOutputSchema>;

export async function estimateServiceDuration(
  input: EstimateServiceDurationInput
): Promise<EstimateServiceDurationOutput> {
  return estimateServiceDurationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'estimateServiceDurationPrompt',
  input: {schema: EstimateServiceDurationInputSchema},
  output: {schema: EstimateServiceDurationOutputSchema},
  prompt: `You are an expert auto mechanic specializing in estimating service durations.

  Based on the service type and vehicle model, provide an estimated duration for the service in minutes.
  Also, provide a brief reasoning for your estimate.

  Service Type: {{{serviceType}}}
  Vehicle Model: {{{vehicleModel}}}
  \n`,
});

const estimateServiceDurationFlow = ai.defineFlow(
  {
    name: 'estimateServiceDurationFlow',
    inputSchema: EstimateServiceDurationInputSchema,
    outputSchema: EstimateServiceDurationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
