import { beforeEach, describe, expect, it } from 'vitest';
import { makeCreateMealUseCase } from '../../../api/domain/meal/applications/use-case/factories/make-create-meal-use-case';
import { makeUpdateMealUseCase } from '../../../api/domain/meal/applications/use-case/factories/make-update-meal-use-case';
import { CreateUserUseCase } from '../../../api/domain/user/applications/use-case/create-user-use-case';
import { makeAuthenticateUseCase } from '../../../api/domain/user/applications/use-case/factories/make-authenticate-use-case';
import { makeCreateUserUseCase } from '../../../api/domain/user/applications/use-case/factories/make-create-user-use-case';
import { MealRepositoryInMemory } from '../../repositorys -in-memory/meal-repository-in-memory';
import { UserRepositoryInMemory } from '../../repositorys -in-memory/user-repository-in-memory';


describe('update meal',()=>{
    let sut = makeUpdateMealUseCase()
    let auth = makeAuthenticateUseCase()
    let createMeal = makeCreateMealUseCase()
    const name = 'Strogonof';
    const description = 'Creme de camarão como mostarda e arroz';
    const isOnTheDiet = true

    let InMemoryUserRepository: UserRepositoryInMemory
    let InMemoryMealRepository: MealRepositoryInMemory
    let createUser: CreateUserUseCase

    beforeEach(()=>{
        InMemoryUserRepository = UserRepositoryInMemory.getInstance()
        InMemoryMealRepository = MealRepositoryInMemory.getInstance()
        createUser = makeCreateUserUseCase()
    })
    it('deve atualizar uma refeião com sucesso',async()=>{
        await createUser.execute('matheus','example@gmail.com','1234560')
        const userAuth = await auth.execute('example@gmail.com','1234560')
        const newMeal = await createMeal.execute(name, description, isOnTheDiet,userAuth)
        await sut.execute({
            token: userAuth,
            mealId: newMeal.toValeu(),
            name: 'lasanha de camarão'
        })
        const res = await InMemoryMealRepository.findUniqueById(newMeal.toValeu())
        expect(res?.getName()).toBe('lasanha de camarão')
        expect(newMeal).toHaveProperty('id',newMeal.toValeu())
    })
})