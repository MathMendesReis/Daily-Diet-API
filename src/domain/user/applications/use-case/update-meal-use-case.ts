import { TJwtService } from "../../../../core/entities/jwt"
import { mealRepository } from "../repositories/meal-repository"

export class UpdateMeal {
    constructor(
        // private userRepository:userRepository,        
        private mealRepository:mealRepository,        
        private jwtService:TJwtService
    ){

    }
    async execute(
        token:string,
        mealId:string,
        name?:string,
        description?:string,
        mealTime?: string,
        isOnTheDiet?:boolean
    ){

        const decoded = this.jwtService.verify(token)

        if(decoded == null){
            throw new Error('Invalid token')
        }

        const mealDB = await this.mealRepository.findUniqueById(mealId)
        
        if(mealDB === null){
            throw new Error('not found')
        }


        mealDB.setName(name || mealDB.getName())
        mealDB.setDescription(description || mealDB.getDescription())
        // mealDB.setMealTime(new Date(mealTime) || mealDB.getMealTime())
        
        // mealTime?: string,
        // isOnTheDiet?:boolean

        // await this.mealRepository.create(decoded.id,newMeal)
        return 
    }
}


