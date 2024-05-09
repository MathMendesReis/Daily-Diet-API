import { mealRepository } from "../../domain/user/applications/repositories/meal-repository";
import { Meal } from "../../domain/user/enterprise/entities/meal";

export class MealRepositoryInMemory implements mealRepository{
    private static instance: MealRepositoryInMemory;
    private meals:Meal[] = []

    private constructor(){}

    public static getStatic(){
        if (!MealRepositoryInMemory.instance) {
            MealRepositoryInMemory.instance = new MealRepositoryInMemory();
        }
        return MealRepositoryInMemory.instance;
    }

    async create(id:string,meal:Meal):Promise<void>{
        this.meals = [...this.meals,meal]
        return
    }
    async findUniqueById(id:string):Promise<Meal | null>{
        return null;
    }
    async findMany(id:string):Promise<Meal[]>{
        return [];
    }
    
    async updateById(id:string, meal:Meal):Promise<void>{}
    async deleteById(id:string):Promise<void>{}
}