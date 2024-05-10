// create-user-controller.ts
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ZodError, z } from "zod";
import { makeCreateUserUseCase } from "../../../domain/user/applications/use-case/factories/make-create-user-use-case";

const bodySchema = z.object({
    name:z.string({message:'campo obrigatorio'}).max(350,{message:'String com limite acima do permitido' }),
    email:z.string({message:'campo obrigatorio'}).email({message:'insira uma email valido'}),
    password:z.string({message:'campo obrigatorio'}).min(6,{message:'insira pelo menos 6 caracteres'}).max(12,{message:'insira no maximo 12 caracteres'})
})
export default function(fastify: FastifyInstance) {
    fastify.post('/create',async function (req: FastifyRequest, reply: FastifyReply) {
        try {
            const {name,email,password} = bodySchema.parse(req.body)
            await makeCreateUserUseCase().execute(name,email,password)
            reply.status(201).send({})
        } catch (error) {
            if(error instanceof ZodError){
                return reply.status(400).send({ message: error.issues[0].message })
            }
        return reply.status(500).send({ message: 'Error interno' })

        }
    });
}



