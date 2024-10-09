import type { Controller } from "src/core/types/http/controller";
import { AuthenticateController } from "../controllers/authenticate.-controller";
import { UserTypeormRepo } from "src/infra/database/typeorm/repositories/user-typeorm-repo";
import { CrypterRepo } from "src/core/crypto/crypter-service";
import { Jsonwebtoken } from "src/core/jsonwebtoken/jsonwebtoken";
import { AuthenticateuUseCase } from "src/domain/authenticate/use-case/authenticate.use-case";

export const makeAuthenticateController =():Controller=>{
  const userRepository = new UserTypeormRepo()
  const crypto = new CrypterRepo()
  const jsonwebtoken = new Jsonwebtoken()
  const auth = new AuthenticateuUseCase(userRepository,crypto,jsonwebtoken)
  return new AuthenticateController(auth)
}