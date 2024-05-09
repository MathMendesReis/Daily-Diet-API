import { mealRepository } from "../../domain/meal/applications/repositories/meal-repository";
import { Meal } from "../../domain/meal/enterprise/entities/meal";

export class MealRepositoryInMemory implements mealRepository{
    private static instance: MealRepositoryInMemory;
    private meals:Meal[] = []

    private constructor(){}
    

    public static getInstance():MealRepositoryInMemory{
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
        return this.meals.find((x)=> x.toValeu() === id) || null;
    }
    async findMany(id:string):Promise<Meal[]>{
        return this.meals;
    }
    
    async updateById(id:string, meal:Meal):Promise<void>{
        const mealDB = await this.findUniqueById(id)
        if(meal === null) return
        this.meals.map((x)=>{
            if(x.toValeu() === mealDB?.toValeu()){
                x.setName(mealDB.getName())
                x.setDescription( mealDB.getDescription())
                x.setDescription(mealDB.getDescription())
                // x.setMealTime(new Date(mealTime) || mealDB.getMealTime())
                x.setIsOnTheDiet(mealDB.getIsOnTheDiet())
                return 
            }
        })
    }

    async deleteById(id: any): Promise<void> {
        
    }
    async findManyIsOnTheDietTrue(userId:string):Promise<Meal[]>{
        return this.meals.filter((x) => x.getIsOnTheDiet() === true);
    }
    async findManyIsOnTheDietFalse(userId:string):Promise<Meal[]>{
        return this.meals.filter((x) => x.getIsOnTheDiet() === false);
        // return this.meals.filter((x) => x.getIsOnTheDiet() === false && x.getId() === id);

    }

}