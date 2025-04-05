import { z } from 'zod';

export const securityCodeInputSchema = z.object({
  digit1: z.string().length(1),
  digit2: z.string().length(1),
  digit3: z.string().length(1),
  digit4: z.string().length(1),
  digit5: z.string().length(1),
  digit6: z.string().length(1),
});
