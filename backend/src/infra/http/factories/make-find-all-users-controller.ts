import type { Controller } from "src/core/types/http/controller";
import { DeleteUserController } from "../controllers/delete-user-controller";
import { UserTypeormRepo } from "src/infra/database/typeorm/repositories/user-typeorm-repo";
import { DeleteUserUseCase } from "src/domain/user/use-case/delete-user-use-case";
import { FindAllUserController } from "../controllers/find-all-user-controller";
import { FindAllUsersUseCase } from "src/domain/user/use-case/find-all-user-use-case";

export const makeFindAllUserController = ():Controller=>{
  const userRepository = new UserTypeormRepo()
  const findAllUsersUseCase = new FindAllUsersUseCase(userRepository)
  const controller = new FindAllUserController(findAllUsersUseCase)
  return controller
}