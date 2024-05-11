import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { fastify } from '../../../api/core/fastify/app'
import { makeAuthenticateUseCase } from '../../../api/domain/user/applications/use-case/factories/make-authenticate-use-case'
import { makeCreateUserUseCase } from '../../../api/domain/user/applications/use-case/factories/make-create-user-use-case'


describe('Create Meal controller',()=>{
    beforeAll(async () => {
        await fastify.ready()
      })
    
      afterAll(async () => {
        await fastify.close()
      })

      it('Deve criar uma refeição com sucesso',async()=>{
        await makeCreateUserUseCase().execute('matheus','example@gmail.com','1234560')
        const token = await makeAuthenticateUseCase().execute('example@gmail.com','1234560')

        const request = await fastify.inject({
            method:'POST',
            url:'/meal/create',
            headers:{
              authorization:token
            },
            body:{
              name:'arroz carreteiro',
              description:'arroz com carne de sol, creme de leite e bastante queijo',
              isOnTheDiet:false

            }
        })
        const findMany = await fastify.inject({
          method:'GET',
          url: '/meal/find/many',
          headers:{
            authorization:token
          },
          
      })

      const mealsArray = JSON.parse(findMany.body)
        const mealID = mealsArray[0].id
        const mealById = await fastify.inject({
            method:'GET',
            url: `/meal/${mealID}`,
            headers:{
              authorization:token
            },
            
        })
        console.log(JSON.parse(mealById.body))
        expect(request.statusCode).toBe(201)
      })


})