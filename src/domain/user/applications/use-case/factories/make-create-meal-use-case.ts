import { MealRepositoryInMemory } from "../../../../../__test__/repositorys -in-memory/meal-repository-in-memory";
import { JwtService } from "../../../../../core/entities/jwt";
import { CreateMeal } from "../create-meal-use-case";

export function makeCreateMealUseCase(){
    const mealRepositoryInMemory = MealRepositoryInMemory.getStatic()
    const jwtService = new JwtService()
    return new CreateMeal(mealRepositoryInMemory,jwtService)
}