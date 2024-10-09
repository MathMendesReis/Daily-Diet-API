import { z } from "zod";

const envSchema = z.object({
  POSTGRES_DB:z.string(),
  POSTGRES_USER:z.string(),
  POSTGRES_PASSWORD:z.string(),
  POSTGRES_PORT:z.number({coerce:true}),
  PORT:z.number({coerce:true}).default(3000),
  HOST:z.string()
})

const envSchemaValidation = envSchema.safeParse(process.env);

if (!envSchemaValidation.success) {
  console.error(envSchemaValidation.error.issues);
  throw new Error('There is an error with the server environment variables');
}

export const _env = envSchemaValidation.data;
