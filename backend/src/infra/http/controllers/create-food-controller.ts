import type { Controller } from "src/core/types/http/controller";
import type { HttpRequest } from "src/core/types/http/http";
import type { ICreateFoodUseCase } from "src/domain/food/contracts/create-food-use-case";

export class CreateFoodController implements Controller{
  constructor(
    private readonly ICreateFoodUseCase:ICreateFoodUseCase
  ){}
  async handle(req: HttpRequest){
    const {name,description,isDiet} = req.body
    const token = req.headers.authorization
    return await this.ICreateFoodUseCase.execute({name,description,isDiet,token})
  }
}
