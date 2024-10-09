import type { Controller } from "src/core/types/http/controller";
import type { HttpRequest, HttpResponse } from "src/core/types/http/http";
import type { IDeleteUserseCase } from "src/domain/user/contratcs/delete-user-use-case";

export class DeleteUserController implements Controller{
    constructor(
      private readonly IDeleteUserseCase:IDeleteUserseCase,
    ){}
    async handle(req: HttpRequest):Promise<HttpResponse>{
      const {id} = req.params
      return await this.IDeleteUserseCase.execute({id})
    }
}