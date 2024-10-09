import type { IJsonwebtoken } from "src/core/jsonwebtoken/ijsonwebtoken";
import type { IFindAllUseCase, Props } from "../contracts/find-all-use-case";
import type { IFoodRepository } from "../contracts/food-repositories";
import { Ok } from "src/core/utils/ok";
import type { ServerResponse } from "src/core/utils/server-response";
import type { IUserRepository } from "src/domain/user/contratcs/user-repository";
import { NotFoundError } from "src/core/errors/not-found-error";

export class FindAllFoods implements IFindAllUseCase{
  constructor(
    private readonly IFoodRepository:IFoodRepository,
    private readonly Jsonwebtoken:IJsonwebtoken,
    private readonly IUserRepository:IUserRepository


  ){}
  async execute({token,limit,page}: Props): Promise<ServerResponse> {
    const payload = this.Jsonwebtoken.verify(token)
    const user = await this.IUserRepository.findById(payload.sub)
    if(!user){
      throw new NotFoundError()
    }
    const foods = await this.IFoodRepository.findByUserId(user.id)
    console.log(foods)
    return new Ok(foods);
  }

}