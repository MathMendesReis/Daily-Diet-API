import { MealRepositoryInMemory } from "../../../../../../__test__/repositorys -in-memory/meal-repository-in-memory";
import { UserRepositoryInMemory } from "../../../../../../__test__/repositorys -in-memory/user-repository-in-memory";
import { JwtService } from "../../../../../core/entities/jwt";
import { DeleteMealUseCase } from "../delete-meal-use-caase";

export function makeDeleteMealUseCase() {
    const mealRepositoryInMemory = MealRepositoryInMemory.getInstance()
    const userRepositoryInMemory =UserRepositoryInMemory.getInstance()
    const jwtService = new JwtService()
    return new DeleteMealUseCase(userRepositoryInMemory,mealRepositoryInMemory,jwtService)
}