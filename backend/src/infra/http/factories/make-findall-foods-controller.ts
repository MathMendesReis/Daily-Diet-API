import type { Controller } from "src/core/types/http/controller";
import { FindAllFoodsController } from "../controllers/find-all-food-controller";
import { FindAllFoods } from "src/domain/food/use-case/find-alll-food-use-case";
import { FoodTypeormRepo } from "src/infra/database/typeorm/repositories/food-typeorm-repository";
import { Jsonwebtoken } from "src/core/jsonwebtoken/jsonwebtoken";
import { UserTypeormRepo } from "src/infra/database/typeorm/repositories/user-typeorm-repo";

export const makFindAllFoodController = ():Controller=>{
  const foodTypeormRepo = new FoodTypeormRepo()
  const jsonwebtoken = new Jsonwebtoken()
  const userRepository = new UserTypeormRepo()

  const findAllFoods= new FindAllFoods(foodTypeormRepo,jsonwebtoken,userRepository)
  const controller = new FindAllFoodsController(findAllFoods)
  return controller
}