import { hash } from 'bcryptjs'
import { beforeEach, describe, expect, it } from 'vitest'
import { JwtService } from '../../core/entities/jwt'
import { AuthenticateUseCase } from '../../domain/user/applications/use-case/Authenticate-use-case'
import { makeAuthenticateUseCase } from '../../domain/user/applications/use-case/factories/make-authenticate-use-case'
import { User } from '../../domain/user/enterprise/entities/user'
import { UserRepositoryInMemory } from '../repositorys -in-memory/user-repository-in-memory'

describe('Create new user',()=>{
    let InMemoryUserRepository: UserRepositoryInMemory
    let sut: AuthenticateUseCase

    beforeEach(()=>{
        InMemoryUserRepository = UserRepositoryInMemory.getInstance();
        sut = makeAuthenticateUseCase()
    })
     it('Deve autenticar um usuario com sucesso', async () => {
         const user3 = new User('User 3', 'user1@example.com', await hash('password3', 6));
         await InMemoryUserRepository.create(user3);
         const response = await sut.execute(user3.getEmail(),'password3')
         const jwtService = new JwtService();
         const decoded = jwtService.verify(response);
        console.log(response)
         expect(typeof response).toBe('string');
         expect(decoded).toHaveProperty('id', user3.toValeu());
       
     })

    it('Deve retornar um erro ao inserir um email invalido', async () => {
        const email = 'user@example.com';
        await expect(sut.execute(email, '_')).rejects.toThrow('Not found User');
       
    })
    it('Deve retornar um erro ao inserir uma senha invalida', async () => {
        const user3 = new User('User 15', 'user3@example.com', await hash('password3', 6));
        await InMemoryUserRepository.create(user3);
        await expect(sut.execute('user3@example.com', 'password')).rejects.toThrow('Invalid credentials');
    })
})
