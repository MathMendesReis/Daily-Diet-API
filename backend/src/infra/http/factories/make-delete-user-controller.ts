import type { Controller } from "src/core/types/http/controller";
import { DeleteUserController } from "../controllers/delete-user-controller";
import { UserTypeormRepo } from "src/infra/database/typeorm/repositories/user-typeorm-repo";
import { DeleteUserUseCase } from "src/domain/user/use-case/delete-user-use-case";

export const makeDeleteUserController = ():Controller=>{
  const userRepository = new UserTypeormRepo()
  const deleteUserUseCase = new DeleteUserUseCase(userRepository)
  const controller = new DeleteUserController(deleteUserUseCase)
  return controller
}