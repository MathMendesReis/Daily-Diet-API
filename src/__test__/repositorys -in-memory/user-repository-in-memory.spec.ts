import { hash } from 'bcryptjs'
import { beforeEach, describe, expect, test } from 'vitest'
import { User } from '../../domain/user/enterprise/entities/user'
import { UserRepositoryInMemory } from './user-repository-in-memory'


describe('Testando repositirio in memory',()=>{
    let InMemoryUserRepository: UserRepositoryInMemory
    let user:User


    beforeEach( async ()=>{
        InMemoryUserRepository = new UserRepositoryInMemory()
        user = new User('User 3', 'user1@example.com', await hash('password3', 6));
        await InMemoryUserRepository.create(user)

    })
    test('create user',async()=>{
        const savedUser = await InMemoryUserRepository.findEmailByEmail(user.getEmail())
        expect(savedUser).not.toBeNull()
        expect(savedUser?.getEmail()).toBe('user1@example.com');
    })
    test('deve retornar todos os usuarios cadastrados',async()=>{
        const users = await InMemoryUserRepository.findAll()
        const allUsersAreInstancesOfUser = users.every(user => user instanceof User);
        expect(allUsersAreInstancesOfUser).toBe(true);
    })
    test('deve retornar null ao nao achar um usurio pelo seu email',async()=>{
        const user = await InMemoryUserRepository.findEmailByEmail('nonexistent@example.com')
        expect(user).toBeNull();
    })
})