import type { Controller } from "src/core/types/http/controller";
import type { HttpRequest, HttpResponse } from "src/core/types/http/http";
import type { IDeleteUserseCase } from "src/domain/user/contratcs/delete-user-use-case";
import type { IFindAllUser } from "src/domain/user/contratcs/find-all-users";

export class FindAllUserController implements Controller{
    constructor(
      private readonly IFindAllUser:IFindAllUser,
    ){}
    async handle(req: HttpRequest):Promise<HttpResponse>{
      return await this.IFindAllUser.execute({id:req.params.id})
    }
}