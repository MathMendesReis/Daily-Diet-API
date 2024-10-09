import type { Controller } from "src/core/types/http/controller";
import { DeleteUserController } from "../controllers/delete-user-controller";
import { UserTypeormRepo } from "src/infra/database/typeorm/repositories/user-typeorm-repo";
import { DeleteUserUseCase } from "src/domain/user/use-case/delete-user-use-case";
import { DeleteFoodController } from "../controllers/delete-food-controller";
import { DeleteFoodUseCase } from "src/domain/food/use-case/delete-fodd-use-case";
import { FoodTypeormRepo } from "src/infra/database/typeorm/repositories/food-typeorm-repository";

export const makeDeleteFoodController = ():Controller=>{
  const foodTypeormRepo = new FoodTypeormRepo()
  const deleteFoodUseCase = new DeleteFoodUseCase(foodTypeormRepo)
  const controller = new DeleteFoodController(deleteFoodUseCase)
  return controller
}