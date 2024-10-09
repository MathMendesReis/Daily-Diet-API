import { Food } from "src/infra/database/typeorm/entity/Food";
import type { ICreateFoodUseCase, InputFood } from "../contracts/create-food-use-case";
import type { IFoodRepository } from "../contracts/food-repositories";
import type { IJsonwebtoken } from "src/core/jsonwebtoken/ijsonwebtoken";
import type { IUserRepository } from "src/domain/user/contratcs/user-repository";
import { Ok } from "src/core/utils/ok";
import type { ServerResponse } from "src/core/utils/server-response";

export class CreateFoodUseCase implements ICreateFoodUseCase{
  constructor(
    private readonly IFoodRepository:IFoodRepository,
    private readonly IUserRepository:IUserRepository,
    private readonly Jsonwebtoken:IJsonwebtoken,

  ){}
  async execute({description,isDiet,name,token}: InputFood): Promise<ServerResponse> {
    const verify = this.Jsonwebtoken.verify(token)
    const user = await this.IUserRepository.findById(verify.sub)
    const food = new Food()
    food.name = name
    food.description =description
    food.isDiet = String(isDiet).toLowerCase() === 'true'
    food.user = user
    food.date = new Date()
    food.update = new Date()
    const res = await this.IFoodRepository.create(food)
    return new Ok(res)
  }
}