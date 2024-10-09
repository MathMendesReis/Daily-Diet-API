import type { ServerResponse } from "src/core/utils/server-response";
import type { IDeleteUserseCase } from "../contratcs/delete-user-use-case";
import type { IUserRepository } from "../contratcs/user-repository";
import { Ok } from "src/core/utils/ok";
import { NotFoundError } from "src/core/errors/not-found-error";

export class DeleteUserUseCase implements IDeleteUserseCase{
  constructor(
    private readonly IUserRepository:IUserRepository,
  ){}
  async execute({ id }: { id: string; }): Promise<ServerResponse> {
    const userEntity = await this.IUserRepository.findById(id)
    if(!userEntity){
      throw new NotFoundError()
    }
    await this.IUserRepository.delete(userEntity.id)
    return new Ok()
  }
}