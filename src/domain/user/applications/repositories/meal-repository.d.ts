import { Meal } from "../../enterprise/entities/meal"

export interface mealRepository {
    create(id:string,meal:Meal):Promise<void>
    findUniqueById(id:string):Promise<Meal | null>
    findMany(id:string):Promise<Meal[]>
    updateById(id:string, meal:Meal):Promise<void>
    deleteById(id):Promise<void>
}