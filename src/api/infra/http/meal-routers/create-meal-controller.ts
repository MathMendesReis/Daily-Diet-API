// create-user-controller.ts
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ZodError, z } from "zod";
import { makeCreateMealUseCase } from "../../../domain/meal/applications/use-case/factories/make-create-meal-use-case";

const bodySchema = z.object({
    name:z.string({message:'campo obrigatorio'}).max(350,{message:'String com limite acima do permitido' }),
    description:z.string({message:'campo obrigatorio'}),
    isOnTheDiet:z.boolean({message:'campo obrigatorio'}).default(false),
})

const headersSchema = z.object({
    authorization: z.string({ message: 'Token de autorização ausente ou vazio' })
});
export default function(fastify: FastifyInstance) {
    fastify.post('/meal/create',async function (req: FastifyRequest, reply: FastifyReply) {
        try {
             const { authorization } = headersSchema.parse(req.headers);
             const {name,description,isOnTheDiet} = bodySchema.parse(req.body)
             await makeCreateMealUseCase().execute(name,description,isOnTheDiet,authorization)
            reply.status(201).send({})
        } catch (error) {
            if(error instanceof ZodError){
                return reply.status(400).send({ message: error.issues[0].message })
            }
        return reply.status(500).send({ message: 'Error interno' })

        }
    });
}



