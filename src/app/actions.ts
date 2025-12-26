'use server';

import { estimateServiceDuration, EstimateServiceDurationInput, EstimateServiceDurationOutput } from '@/ai/flows/estimate-service-duration';

export async function estimateServiceDurationAction(
  input: EstimateServiceDurationInput
): Promise<{ success: boolean; data: EstimateServiceDurationOutput | null; error?: string }> {
  try {
    const output = await estimateServiceDuration(input);
    return { success: true, data: output };
  } catch (error) {
    console.error('Error estimating service duration:', error);
    return { success: false, data: null, error: 'Failed to estimate duration.' };
  }
}
