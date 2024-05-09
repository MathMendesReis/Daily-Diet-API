import { TJwtService } from "../../../../core/entities/jwt"
import { Meal } from "../../enterprise/entities/meal"
import { mealRepository } from "../repositories/meal-repository"

export class UpdateMeal {
    constructor(
        private mealRepository:mealRepository,        
        private jwtService:TJwtService
    ){}

    async execute(
        { token, mealId, name, description, mealTime, isOnTheDiet }: {
            token: string,
            mealId: string,
            name?: string,
            description?: string,
            mealTime?: string,
            isOnTheDiet?: boolean
        }
    ){
        const decoded = this.jwtService.verify(token)

        if(decoded == null){
            throw new Error('Invalid token')
        }

        const mealDB = await this.mealRepository.findUniqueById(mealId)
        
        if(mealDB === null){
            throw new Error('not found')
        }

        this.updateName(mealDB, name);
        this.updateDescription(mealDB, description);
        this.updateMealTime(mealDB, mealTime);
        this.updateIsOnTheDiet(mealDB, isOnTheDiet);

        await this.mealRepository.updateById(decoded.id, mealDB)
        return 
    }

    private updateName(mealDB:Meal, name?: string) {
        if (name !== undefined) {
            mealDB.setName(name);
        }
    }

    private updateDescription(mealDB:Meal, description?: string) {
        if (description !== undefined) {
            mealDB.setDescription(description);
        }
    }

    private updateMealTime(mealDB:Meal, mealTime?: string) {
        if (mealTime !== undefined) {
            // mealDB.setMealTime(new Date(mealTime));
        }
    }

    private updateIsOnTheDiet(mealDB:Meal, isOnTheDiet?: boolean) {
        if (isOnTheDiet !== undefined) {
            mealDB.setIsOnTheDiet(isOnTheDiet);
        }
    }
}