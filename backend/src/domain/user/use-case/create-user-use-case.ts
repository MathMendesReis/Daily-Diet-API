import { User as UserEntity } from "src/infra/database/typeorm/entity/User";
import type { ICreateUserUseCase } from "../contratcs/create-user-use-case";
import type { IUserRepository } from "../contratcs/user-repository";
import { ConflictError } from "src/core/errors/conflict-error";
import { Created } from "src/core/utils/Created";
import type { ICrypterRepository } from "src/core/crypto/crypter-repository";

export class CreateUserUseCase implements ICreateUserUseCase{
  constructor(
    private readonly IUserRepository:IUserRepository,
    private readonly CrypterRepo:ICrypterRepository,
  ){}
  async execute({email,password}:{email:string, password:string}){
    const userExists = await this.IUserRepository.findByEmail(email)

    if(userExists){
      throw new ConflictError('User already exists')
    }

    const passwordHash = await this.CrypterRepo.crypt(password)

    const userEntity = new UserEntity()
    userEntity.email = email
    userEntity.password = passwordHash

    const newUserEntity = await this.IUserRepository.create(userEntity)

    return new Created(newUserEntity)
  }
}