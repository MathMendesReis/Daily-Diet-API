import { TJwtService } from "../../../../core/entities/jwt";
import { mealRepository } from "../repositories/meal-repository";

export class findLongestStreak{
    constructor(
        private mealRepository:mealRepository,        
        private jwtService:TJwtService
    ){}
    async execute({token}:{token:string}){

        const decoded = this.jwtService.verify(token)

        if(decoded === null){
            throw new Error('Invalid Token')
        }

        const findManyMeals = await this.mealRepository.findMany(decoded.id)

        findManyMeals.sort((a, b) => a.getMealTime().getTime() - b.getMealTime().getTime());

        let longestStreak = 0;
        let currentStreak = 0;
        let currentDay = null;

        for(const meal of findManyMeals){
            if(meal.getIsOnTheDiet()){
                if (meal.getMealTime().getDay() !== currentDay) {
                    currentDay = meal.getMealTime().getDay();
                    currentStreak = 1;
                }
                else {
                    currentStreak++;
                }
                if (currentStreak > longestStreak) {
                    longestStreak = currentStreak;
                }
            }else {
                currentStreak = 0;
            }
        }
        return longestStreak;
    }
}