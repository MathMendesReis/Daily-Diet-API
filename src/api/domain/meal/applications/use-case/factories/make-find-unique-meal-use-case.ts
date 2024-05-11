import { MealRepositoryInMemory } from "../../../../../../__test__/repositorys -in-memory/meal-repository-in-memory"
import { JwtService } from "../../../../../core/entities/jwt"
import { FindUniqueMealbiYdUseCase } from "../find-unique-meal-by-id-use-case"

export function MakeFindUniqueMealUseCase() {
    const mealRepositoryInMemory = MealRepositoryInMemory.getInstance()
    const jwtService = new JwtService()
    return new FindUniqueMealbiYdUseCase(mealRepositoryInMemory,jwtService)
}