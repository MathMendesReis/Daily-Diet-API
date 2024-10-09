import type { Controller } from "src/core/types/http/controller"
import { CreateUserController } from "../controllers/create-user-controller"
import { UserTypeormRepo } from "src/infra/database/typeorm/repositories/user-typeorm-repo"
import { CrypterRepo } from "src/core/crypto/crypter-service"
import { CreateUserUseCase } from "src/domain/user/use-case/create-user-use-case"

export const makeCreateUserController  = ():Controller=>{
  const userRepository = new UserTypeormRepo()
  const crypto = new CrypterRepo()
  const useCase = new CreateUserUseCase(userRepository,crypto)
  const controller = new CreateUserController(useCase)
  return controller
}