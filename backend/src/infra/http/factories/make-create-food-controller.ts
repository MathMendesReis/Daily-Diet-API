import type { Controller } from "src/core/types/http/controller"
import { CreateFoodUseCase } from "src/domain/food/use-case/create-food-use-case"
import { CreateFoodController } from "../controllers/create-food-controller"
import { FoodTypeormRepo } from "src/infra/database/typeorm/repositories/food-typeorm-repository"
import { UserTypeormRepo } from "src/infra/database/typeorm/repositories/user-typeorm-repo"
import { Jsonwebtoken } from "src/core/jsonwebtoken/jsonwebtoken"

export const makeCreateFoodController  = ():Controller=>{
  const foodTypeormRepo = new FoodTypeormRepo()
  const userTypeormRepo = new UserTypeormRepo()
  const jsonwebtoken = new Jsonwebtoken()
  const createFoodUseCase = new CreateFoodUseCase(foodTypeormRepo,userTypeormRepo,jsonwebtoken)
  const controller = new CreateFoodController(createFoodUseCase)
  return controller
}