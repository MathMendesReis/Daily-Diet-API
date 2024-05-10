import { z } from 'zod';

const envSchema = z.object({
    NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
    JWT_SECRET: z.string().default('develop'),
});

  
export const env = envSchema.parse(process.env);
