import { MealRepositoryInMemory } from "../../../../../../__test__/repositorys -in-memory/meal-repository-in-memory"
import { JwtService } from "../../../../../core/entities/jwt"
import { FindManyMealUseCase } from "../find-many-meal-use-case"

export function MakeFindManyMealUseCase() {
    const mealRepositoryInMemory = MealRepositoryInMemory.getInstance()
    const jwtService = new JwtService()
    return new FindManyMealUseCase(mealRepositoryInMemory,jwtService)
}