import { Food } from "src/infra/database/typeorm/entity/Food";
import type { IFoodRepository } from "../contracts/food-repositories";
import type { IUserRepository } from "src/domain/user/contratcs/user-repository";
import { Ok } from "src/core/utils/ok";
import type { ServerResponse } from "src/core/utils/server-response";
import type { InputUpdateFood, IUpdateFoodUseCase } from "../contracts/update-food";
import { NotFoundError } from "src/core/errors/not-found-error";

export class UpdateFoodUseCase implements IUpdateFoodUseCase{
  constructor(
    private readonly IFoodRepository:IFoodRepository,

  ){}
  async execute({description,isDiet,name,id}: InputUpdateFood): Promise<ServerResponse> {
    
    const food = await this.IFoodRepository.findById(id)
    if(!food){
      throw new NotFoundError()
    }

    food.description = description?? food.description
    food.isDiet = isDiet?? food.isDiet
    food.description = name?? food.name

    await this.IFoodRepository.update(food.id, food)
    return new Ok()
  }
}