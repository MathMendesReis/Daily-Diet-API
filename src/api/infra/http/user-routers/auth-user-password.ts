// create-user-controller.ts
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ZodError, z } from "zod";
import { makeAuthenticateUseCase } from "../../../domain/user/applications/use-case/factories/make-authenticate-use-case";

const bodySchema = z.object({
    email:z.string({message:'campo obrigatorio'}).email({message:'insira uma email valido'}),
    password:z.string({message:'campo obrigatorio'}).min(6,{message:'insira pelo menos 6 caracteres'}).max(12,{message:'insira no maximo 12 caracteres'})
})
export default function(fastify: FastifyInstance) {
    fastify.post('/auth',async function (req: FastifyRequest, reply: FastifyReply) {
        try {
            const {email,password} = bodySchema.parse(req.body)
            const token = await makeAuthenticateUseCase().execute(email,password)
            reply.status(200).send({token:token})
        } catch (error) {
            if(error instanceof ZodError){
                return reply.status(400).send({ message: error.issues[0].message })
            }
            if(error instanceof Error){
                return reply.status(400).send({ message: error.message })
            }
        return reply.status(500).send({ message: 'Error interno' })

        }
    });
}



