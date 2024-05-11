import { TJwtService } from "../../../../core/entities/jwt";
import { userRepository } from "../../../user/applications/repositories/user-repository";
import { mealRepository } from "../repositories/meal-repository";

export class DeleteMealUseCase {
    constructor(
        private userRepository:userRepository,        
        private mealRepository:mealRepository,
        private jwtService:TJwtService
    ){}
    async execute({token,mealId}:{token:string,mealId:string}){
        const decoded = this.jwtService.verify(token)
        if(decoded === null){
            throw new Error('invalid token')
        }
        const userDB =  this.userRepository.findEmailByEmail(decoded.id)
        if(userDB === null){
            throw new Error('invalid token')
        }
        const mealDB = await this.mealRepository.findUniqueById(mealId,'_')
         if(mealDB === null){
             throw new Error('not found meal')
         }
        await this.mealRepository.deleteById(mealDB.toValeu())
    }

}