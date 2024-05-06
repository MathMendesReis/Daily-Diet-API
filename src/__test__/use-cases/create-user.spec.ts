import { beforeEach, describe, expect, it } from 'vitest'
import { CreateUserUseCase } from '../../domain/user/applications/use-case/create-user-use-case'
import { UserRepositoryInMemory } from '../repositorys -in-memory/user-repository-in-memory'

describe('Create new user',()=>{
    let InMemoryUserRepository: UserRepositoryInMemory
    let sut: CreateUserUseCase

    beforeEach(()=>{
        InMemoryUserRepository = new UserRepositoryInMemory()
        sut = new CreateUserUseCase(InMemoryUserRepository)
    })

    it('Deve ser possivel criar um novo usuario',async ()=>{
        const response = await sut.execute('matheus','example@gmail.com')
        expect(response).toHaveProperty('id')
        expect(response).toHaveProperty('name')
    })

})
