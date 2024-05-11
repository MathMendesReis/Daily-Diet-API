import { MealRepositoryInMemory } from "../../../../../../__test__/repositorys -in-memory/meal-repository-in-memory";
import { JwtService } from "../../../../../core/entities/jwt";
import { findLongestStreak } from "../find-longest-streak-use-case";

export function makeFindLongestUseCase() {
    const mealRepository = MealRepositoryInMemory.getInstance()
    const jwtService = new JwtService()
    return new findLongestStreak(mealRepository,jwtService)
}



