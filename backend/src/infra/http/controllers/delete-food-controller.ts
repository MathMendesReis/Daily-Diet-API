import type { Controller } from "src/core/types/http/controller";
import type { HttpRequest, HttpResponse } from "src/core/types/http/http";
import type { IDeleteFoodUseCase } from "src/domain/food/contracts/delete-food";

export class DeleteFoodController implements Controller{
    constructor(
      private readonly IDeleteFoodUseCase:IDeleteFoodUseCase,
    ){}
    async handle(req: HttpRequest):Promise<HttpResponse>{
      const {id} = req.params
      return await this.IDeleteFoodUseCase.execute({id})
    }
}