import type { ServerResponse } from "src/core/utils/server-response";
import type { IFindAllUser } from "../contratcs/find-all-users";
import type { IUserRepository } from "../contratcs/user-repository";
import { Ok } from "src/core/utils/ok";

export class FindAllUsersUseCase implements IFindAllUser{
  constructor(
    private readonly IUserRepository:IUserRepository,
  ){}
  async execute({id}:{id?:string}): Promise<ServerResponse> {
    if(id){
      const findById = await this.IUserRepository.findById(id)
      return new Ok(findById)
    }
    const findAll = await this.IUserRepository.findAll()
    return new Ok(findAll)
  }
}