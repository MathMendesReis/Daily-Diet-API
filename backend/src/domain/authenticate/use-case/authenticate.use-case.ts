import type { ICrypterRepository } from "src/core/crypto/crypter-repository";
import type { IUserRepository } from "src/domain/user/contratcs/user-repository";
import type { IAuthenticateUseCase } from "../contratcs/IAuthenticate-use-case";
import type { ServerResponse } from "src/core/utils/server-response";
import { NotFoundError } from "src/core/errors/not-found-error";
import { Ok } from "src/core/utils/ok";
import { Unauthorized } from "src/core/errors/unauthorized";
import type { IJsonwebtoken } from "src/core/jsonwebtoken/ijsonwebtoken";

export class AuthenticateuUseCase implements IAuthenticateUseCase{
  constructor(
    private readonly IUserRepository:IUserRepository,
    private readonly CrypterRepo:ICrypterRepository,
    private readonly Jsonwebtoken:IJsonwebtoken,
  ){}
  async execute({ email, password }: { email: string; password: string; }): Promise<ServerResponse> {

    const userEntity = await this.IUserRepository.findByEmail(email)

    if(!userEntity){
      throw new NotFoundError()
    }

    const decoded = await this.CrypterRepo.compare(password, userEntity.password)
    if(!decoded){
      throw new Unauthorized()
    }

    const payload = {
      sub:userEntity.id,
    }
    const token = this.Jsonwebtoken.sign(payload)
    return new Ok(token)

  }


}