import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { fastify } from '../../api/core/fastify/app'

describe('create user constroller',()=>{
    beforeAll(async () => {
        await fastify.ready()
      })
    
      afterAll(async () => {
        await fastify.close()
      })
    it('Deve autenticar um usuario com sucesso',async()=>{
         await fastify.inject({
            method:'POST',
            url:'/create',
            body:{
              name:'matheus mendes',
              email:'matheusmendes@example.com',
              password:'secret12'
            }
        })
        const response = await fastify.inject({
            method:'POST',
            url:'/auth',
            body:{
              email:'matheusmendes@example.com',
              password:'secret12'
            }
        })
        expect(response.statusCode).toBe(200)

    })
    it('Deve não autenticar um usuario com senha incorreta',async()=>{
         await fastify.inject({
            method:'POST',
            url:'/create',
            body:{
              name:'matheus mendes',
              email:'matheusmendes@example.com',
              password:'secret12'
            }
        })
        const response = await fastify.inject({
            method:'POST',
            url:'/auth',
            body:{
              email:'matheusmendes@example.com',
              password:'secret121'
            }
        })
        expect(response.statusCode).toBe(400)

    })
})