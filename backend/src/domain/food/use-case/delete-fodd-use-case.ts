import { Food } from "src/infra/database/typeorm/entity/Food";
import type { IFoodRepository } from "../contracts/food-repositories";
import type { IJsonwebtoken } from "src/core/jsonwebtoken/ijsonwebtoken";
import type { IUserRepository } from "src/domain/user/contratcs/user-repository";
import { Ok } from "src/core/utils/ok";
import type { ServerResponse } from "src/core/utils/server-response";
import type { InputUpdateFood, IUpdateFoodUseCase } from "../contracts/update-food";
import { NotFoundError } from "src/core/errors/not-found-error";
import type { IDeleteFoodUseCase, InputDeleteFood } from "../contracts/delete-food";

export class DeleteFoodUseCase implements IDeleteFoodUseCase{
  constructor(
    private readonly IFoodRepository:IFoodRepository,

  ){}
  async execute({id}: InputDeleteFood): Promise<ServerResponse> {
      const food = await this.IFoodRepository.findById(id)
      if(!food){
        throw new NotFoundError()
      }
      await this.IFoodRepository.delete(id)
      return new Ok()
  }
 
}