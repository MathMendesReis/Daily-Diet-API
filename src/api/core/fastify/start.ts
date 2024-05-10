import { fastify } from "./app";

export async function start(){
    try {
      await fastify.listen({ port: 3000 });
      console.log("🚀 HTTP Server Running!");
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };