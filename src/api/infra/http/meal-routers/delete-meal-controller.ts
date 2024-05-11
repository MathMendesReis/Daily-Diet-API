import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ZodError, z } from "zod";
import { makeDeleteMealUseCase } from "../../../domain/meal/applications/use-case/factories/make-delete-meal-use-case";

const headersSchema = z.object({
    authorization: z.string({ message: 'Token de autorização ausente ou vazio' })
});
const paramsSchema = z.object({
    mealID: z.string({ message: 'Deve conter o id da refeição' })
});
export default function(fastify: FastifyInstance) {
    fastify.delete('/delete/:id',async function ({headers,params}: FastifyRequest, reply: FastifyReply) {
        try {
            const { authorization } = headersSchema.parse(headers);
            const {mealID} = paramsSchema.parse(params)
            await makeDeleteMealUseCase().execute({token:authorization,mealId:mealID})
            reply.status(201).send({})
        } catch (error) {
            if(error instanceof ZodError){
                return reply.status(400).send({ message: error.issues[0].message })
            }
        return reply.status(500).send({ message: 'Error interno' })

        }
    });
}



