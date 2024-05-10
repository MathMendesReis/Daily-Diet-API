import { TJwtService } from "../../../../core/entities/jwt"
import { userRepository } from "../../../user/applications/repositories/user-repository"
import { Meal } from "../../enterprise/entities/meal"
import { mealRepository } from "../repositories/meal-repository"

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
        mealTime: Date,
        isOnTheDiet:boolean,
        token:string
    ){

        const decoded = this.jwtService.verify(token)

        if(decoded == null){
            throw new Error('Invalid token')
        }
        
        const userDB =  await this.userRepository.findById(decoded.id)

        if(userDB == null){
            throw new Error('User not found')
        }

        const newMeal = new Meal(name, description, new Date(mealTime),isOnTheDiet,userDB.toValeu())
        await this.mealRepository.create(decoded.id,newMeal)
        return newMeal
    }
}


