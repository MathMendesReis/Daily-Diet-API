// create-user-controller.ts
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ZodError, z } from "zod";
import { MakeFindUniqueMealUseCase } from "../../../domain/meal/applications/use-case/factories/make-find-unique-meal-use-case";

const headersSchema = z.object({
    authorization: z.string({ message: 'Token de autorização ausente ou vazio' })
});
const paramsSchema = z.object({
    mealID: z.string({ message: 'Deve conter o id da refeição' })
});
export default async function(fastify: FastifyInstance) {
    fastify.get('/meal/:mealID',async function ({headers,params}: FastifyRequest, reply: FastifyReply) {
        try {
            const {authorization} = headersSchema.parse(headers)
            const {mealID} = paramsSchema.parse(params)
            const res = await MakeFindUniqueMealUseCase().execute({token:authorization,mealID})
            reply.status(201).send(res)
        } catch (error) {
            if(error instanceof ZodError){
                return reply.status(400).send({ message: error.issues[0].message })
            }
        return reply.status(500).send({ message: 'Error interno' })

        }
    });
}



