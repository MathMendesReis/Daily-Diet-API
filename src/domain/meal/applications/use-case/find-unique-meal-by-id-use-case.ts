import { TJwtService } from "../../../../core/entities/jwt";
import { mealRepository } from "../repositories/meal-repository";

export class FindUniqueMeal {
    constructor(
        private mealRepository:mealRepository,        
        private jwtService:TJwtService
    ){}

    async execute({token}:{token:string, }){

        const decoded = this.jwtService.verify(token)
        if(decoded === null){
            throw new Error('INvalidade token')
        }
        return this.mealRepository.findUniqueById(decoded.id)
    }
}