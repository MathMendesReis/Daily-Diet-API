import { MealRepositoryInMemory } from "../../../../../__test__/repositorys -in-memory/meal-repository-in-memory"
import { JwtService } from "../../../../../core/entities/jwt"
import { UpdateMeal } from "../update-meal-use-case"

export function makeUpdateMealUseCase(){
    const mealRepositoryInMemory = MealRepositoryInMemory.getInstance()
    // const userRepositoryInMemory =UserRepositoryInMemory.getInstance()
    const jwtService = new JwtService()
    return new UpdateMeal(mealRepositoryInMemory,jwtService)
}