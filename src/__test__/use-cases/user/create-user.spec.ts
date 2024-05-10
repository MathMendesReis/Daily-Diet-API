import { compare, hash } from 'bcryptjs'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateUserUseCase } from '../../../api/domain/user/applications/use-case/create-user-use-case'
import { makeCreateUserUseCase } from '../../../api/domain/user/applications/use-case/factories/make-create-user-use-case'
import { UserRepositoryInMemory } from '../../repositorys -in-memory/user-repository-in-memory'

describe('Create new user',()=>{
    let InMemoryUserRepository: UserRepositoryInMemory
    let sut: CreateUserUseCase
    

    beforeEach(()=>{
        InMemoryUserRepository = UserRepositoryInMemory.getInstance()
        sut = makeCreateUserUseCase(InMemoryUserRepository)
    })

    it('Deve ser possivel criar um novo usuario',async ()=>{
        const response = await sut.execute('matheus','example@gmail.com','1234560')
        expect(response).toHaveProperty('id')
        expect(response).toHaveProperty('name')
    })
    it('Deve ser possivel criar o hash da senha',async ()=>{
        const password_hash = await hash('1234560',6)    
        const isPasswordCorrectlyHashed = await compare(
            '1234560',
             password_hash
          )
      
          expect(isPasswordCorrectlyHashed).toBe(true)
      
      
    })
    it('Deve identificar que a senha está errada',async ()=>{
        const password_hash = await hash('12345600',6)    
        const isPasswordCorrectlyHashed = await compare(
            '1234560',
             password_hash
          )
          expect(isPasswordCorrectlyHashed).toBe(false)
      
    })

})
