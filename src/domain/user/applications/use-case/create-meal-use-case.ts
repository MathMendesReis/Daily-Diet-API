import { TJwtService } from "../../../../core/entities/jwt"
import { Meal } from "../../enterprise/entities/meal"
import { mealRepository } from "../repositories/meal-repository"
import { userRepository } from "../repositories/user-repository"

export class CreateMeal {
    constructor(
        private userRepository:userRepository,        
        private mealRepository:mealRepository,        
        private jwtService:TJwtService
    ){

    }
    async execute(
        name:string,
        description:string,
        mealTime: string,
        isOnTheDiet:boolean,
        token:string
    ){

        const decoded = this.jwtService.verify(token)

        if(decoded == null){
            throw new Error('Invalid token')
        }
        
        const userDB = await this.userRepository.findById(decoded.id)

        if(userDB == null){
            throw new Error('User not found')
        }

        const newMeal = new Meal(name, description, new Date(mealTime),isOnTheDiet)
        await this.mealRepository.create(decoded.id,newMeal)
        return newMeal
    }
}


