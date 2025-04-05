import { z } from 'zod';
export declare const securityCodeInputSchema: z.ZodObject<{
    digit1: z.ZodString;
    digit2: z.ZodString;
    digit3: z.ZodString;
    digit4: z.ZodString;
    digit5: z.ZodString;
    digit6: z.ZodString;
}, "strip", z.ZodTypeAny, {
    digit1: string;
    digit2: string;
    digit3: string;
    digit4: string;
    digit5: string;
    digit6: string;
}, {
    digit1: string;
    digit2: string;
    digit3: string;
    digit4: string;
    digit5: string;
    digit6: string;
}>;
