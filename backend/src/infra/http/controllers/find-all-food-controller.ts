import type { Controller } from "src/core/types/http/controller";
import type { HttpRequest, HttpResponse } from "src/core/types/http/http";
import type { IFindAllUseCase } from "src/domain/food/contracts/find-all-use-case";

export class FindAllFoodsController implements Controller{
  constructor(
    private readonly IFindAllUseCase:IFindAllUseCase,
  ){}
  async handle(req: HttpRequest):Promise<HttpResponse>{
    console.log(req.query)
    return await this.IFindAllUseCase.execute({token:req.headers.authorization})
  }
}