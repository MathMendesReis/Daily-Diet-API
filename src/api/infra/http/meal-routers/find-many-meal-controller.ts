// create-user-controller.ts
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ZodError, z } from "zod";
import { MakeFindManyMealUseCase } from "../../../domain/meal/applications/use-case/factories/make-find-many-meal-use-case";

const headersSchema = z.object({
    authorization: z.string({ message: 'Token de autorização ausente ou vazio' })
});
export default function(fastify: FastifyInstance) {
    fastify.get('/meal/find/many',async function ({headers}: FastifyRequest, reply: FastifyReply) {
        try {
            const { authorization } = headersSchema.parse(headers);
            const res = await MakeFindManyMealUseCase().execute({token:authorization})
            reply.status(200).send(res)
        } catch (error) {
            if(error instanceof ZodError){
                return reply.status(400).send({ message: error.issues[0].message })
            }
        return reply.status(500).send({ message: 'Error interno' })
        }
    });
}



