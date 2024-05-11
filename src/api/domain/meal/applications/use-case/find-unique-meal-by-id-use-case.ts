import { TJwtService } from "../../../../core/entities/jwt";
import { mealRepository } from "../repositories/meal-repository";

export class FindUniqueMealbiYdUseCase {
    constructor(
        private mealRepository:mealRepository,        
        private jwtService:TJwtService
    ){}

    async execute({token,mealID}:{token:string, mealID:string}){

        const decoded = this.jwtService.verify(token)
        if(decoded === null){
            throw new Error('Invalidade token')
        }
        return this.mealRepository.findUniqueById(decoded.id,mealID)
    }
}