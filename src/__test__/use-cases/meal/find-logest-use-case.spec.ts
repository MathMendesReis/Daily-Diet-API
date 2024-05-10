import { expect, test } from "vitest";
import { JwtService } from "../../../api/core/entities/jwt";
import { makeCreateMealUseCase } from "../../../api/domain/meal/applications/use-case/factories/make-create-meal-use-case";
import { findLongestStreak } from "../../../api/domain/meal/applications/use-case/find-longest-streak-use-case";
import { makeAuthenticateUseCase } from "../../../api/domain/user/applications/use-case/factories/make-authenticate-use-case";
import { makeCreateUserUseCase } from "../../../api/domain/user/applications/use-case/factories/make-create-user-use-case";
import { MealRepositoryInMemory } from "../../repositorys -in-memory/meal-repository-in-memory";
import { UserRepositoryInMemory } from "../../repositorys -in-memory/user-repository-in-memory";


const mealRepositoryMock = MealRepositoryInMemory.getInstance()
const jwtService = new JwtService()
const findLongestStreakUseCase = new findLongestStreak(mealRepositoryMock, jwtService);
const InMemoryUserRepository = UserRepositoryInMemory.getInstance();
const authenticateUseCase = makeAuthenticateUseCase()
const createUserUseCase = makeCreateUserUseCase(InMemoryUserRepository)
const createMealUseCase = makeCreateMealUseCase()
const expectedStreak = 4;


test('should return the longest streak', async () => {
  const user = await createUserUseCase.execute('matheus','example@gmail.com','password')
  const token = await authenticateUseCase.execute(user.getEmail(),'password')
  const meals = [
    { name: 'Meal 1', description: 'Description 1', mealTime: new Date(), isOnTheDiet: true },
    { name: 'Meal 2', description: 'Description 2', mealTime: new Date(), isOnTheDiet: true },
    { name: 'Meal 3', description: 'Description 3', mealTime: new Date(), isOnTheDiet: true },
    { name: 'Meal 4', description: 'Description 4', mealTime: new Date(), isOnTheDiet: true },
    { name: 'Meal 5', description: 'Description 5', mealTime: new Date(), isOnTheDiet: false },
    { name: 'Meal 6', description: 'Description 6', mealTime: new Date(), isOnTheDiet: false },
  ];
  
  // Use o caso de uso para criar as refeições
  for (const meal of meals) {
    await createMealUseCase.execute(meal.name, meal.description, meal.mealTime, meal.isOnTheDiet, token);
  }
  const result = await findLongestStreakUseCase.execute({ token });
  expect(result).toBe(expectedStreak);
});