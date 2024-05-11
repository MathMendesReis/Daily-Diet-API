import { describe, expect, it } from 'vitest';
import { makeCreateMealUseCase } from '../../../api/domain/meal/applications/use-case/factories/make-create-meal-use-case';
import { makeAuthenticateUseCase } from '../../../api/domain/user/applications/use-case/factories/make-authenticate-use-case';
import { makeCreateUserUseCase } from '../../../api/domain/user/applications/use-case/factories/make-create-user-use-case';
import { UserRepositoryInMemory } from '../../repositorys -in-memory/user-repository-in-memory';

describe('testando caso de uso: criar nova refeição',()=>{
    let sut = makeCreateMealUseCase()
    const name = 'Nome da Refeição';
    const description = 'Descrição da Refeição';
    const isOnTheDiet = true
    let InMemoryUserRepository = UserRepositoryInMemory.getInstance()
    let createUser = makeCreateUserUseCase()
    let authUseCaase = makeAuthenticateUseCase()
    
    it('deve retornar erro ao ter um token invalido',async()=>{
       await expect(sut.execute(name, description, isOnTheDiet,'-')).rejects.toThrow('Invalid token');
    })
    it('deve  salvar uma refeição com sucesso',async()=>{
        const user = await createUser.execute('matheus','example@gmail.com','1234560')
        const response = await authUseCaase.execute(user.getEmail(),'1234560')
        const res = await sut.execute(name, description, isOnTheDiet,response)
        expect(res).toHaveProperty('id',res.toValeu())
        await expect(sut.execute(name, description, isOnTheDiet, response)).resolves.not.toThrow();
    })
})