import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { fastify } from '../../../api/core/fastify/app'

describe('create user constroller',()=>{
    beforeAll(async () => {
        await fastify.ready()
      })
    
      afterAll(async () => {
        await fastify.close()
      })
    it('Deve cadastrar um usuario com sucesso',async()=>{
        const response = await fastify.inject({
            method:'POST',
            url:'/create',
            body:{
              name:'matheus mendes',
              email:'matheusmendes@example.com',
              password:'secret12'
            }
        })
        expect(response.statusCode).toBe(201)
        expect(response.raw.req.method).toBe('POST')
        expect(JSON.parse(response.payload)).toEqual({})
    })
    it('Deve retornar error por conta do tamanho minimo do password',async()=>{
        const response = await fastify.inject({
            method:'POST',
            url:'/create',
            body:{
              name:'matheus mendes',
              email:'matheusmendes@example.com',
              password:'1234'
            }
        })
        expect(response.statusCode).toBe(400);
        const payload = JSON.parse(response.body);
        expect(payload.message).toBe('insira pelo menos 6 caracteres');
      })
    it('Deve retornar error por conta do email não informado',async()=>{
        const response = await fastify.inject({
            method:'POST',
            url:'/create',
            body:{
              name:'matheus mendes',
              email:undefined,
              password:'1234678910111213'
            }
        })
        expect(response.statusCode).toBe(400);
        const payload = JSON.parse(response.body);
        expect(payload.message).toBe('campo obrigatorio');
      })
    it('Deve retornar error por conta do email invalido',async()=>{
        const response = await fastify.inject({
            method:'POST',
            url:'/create',
            body:{
              name:'matheus mendes',
              email:'matheusmendesgmail.com',
              password:'1234678910111213'
            }
        })
        expect(response.statusCode).toBe(400);
        const payload = JSON.parse(response.body);
        expect(payload.message).toBe('insira uma email valido');
      })
    it('Deve retornar error por falta do name',async()=>{
        const response = await fastify.inject({
            method:'POST',
            url:'/create',
            body:{
              name:undefined,
              email:'matheusmendes@example.com',
              password:'1234678910111213'
            }
        })
        expect(response.statusCode).toBe(400);
        const payload = JSON.parse(response.body);
        expect(payload.message).toBe('campo obrigatorio');
      })
    it('Deve retornar error por conta do name muito grande',async()=>{
        const longName = 'a'.repeat(351)
        const response = await fastify.inject({
            method:'POST',
            url:'/create',
            body:{
              name:longName,
              email:'matheusmendes@example.com',
              password:'1234678910111213'
            }
        })
        expect(response.statusCode).toBe(400);
        const payload = JSON.parse(response.body);
        expect(payload.message).toBe('String com limite acima do permitido');
      })
})