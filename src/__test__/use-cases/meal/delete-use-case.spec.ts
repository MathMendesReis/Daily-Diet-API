import { beforeEach, describe, expect, it } from 'vitest';
import { makeCreateMealUseCase } from '../../../api/domain/meal/applications/use-case/factories/make-create-meal-use-case';
import { makeDeleteMealUseCase } from '../../../api/domain/meal/applications/use-case/factories/make-delete-meal-use-case';
import { CreateUserUseCase } from '../../../api/domain/user/applications/use-case/create-user-use-case';
import { makeAuthenticateUseCase } from '../../../api/domain/user/applications/use-case/factories/make-authenticate-use-case';
import { makeCreateUserUseCase } from '../../../api/domain/user/applications/use-case/factories/make-create-user-use-case';
import { MealRepositoryInMemory } from '../../repositorys -in-memory/meal-repository-in-memory';
import { UserRepositoryInMemory } from '../../repositorys -in-memory/user-repository-in-memory';


describe('update meal',()=>{
    let sut = makeDeleteMealUseCase()
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
        createUser = makeCreateUserUseCase(InMemoryUserRepository)

    })
    it('deve remover uma refeição',async()=>{
        await createUser.execute('matheus','example@gmail.com','1234560')
        const userAuth = await auth.execute('example@gmail.com','1234560')
        const newMeal = await createMeal.execute(name, description, new Date(), isOnTheDiet,userAuth)
        await sut.execute({
            token:userAuth,
            mealId:newMeal.toValeu()
        })
        const res = await InMemoryMealRepository.findUniqueById(newMeal.toValeu())
        expect(res).toBe(null)
    })
})