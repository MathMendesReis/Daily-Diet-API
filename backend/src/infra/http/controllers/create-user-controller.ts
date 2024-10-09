import type { Controller } from "src/core/types/http/controller";
import type { HttpRequest, HttpResponse } from "src/core/types/http/http";
import type { ICreateUserUseCase } from "src/domain/user/contratcs/create-user-use-case";
export class CreateUserController implements Controller{
  constructor(private readonly createUserUseCase:ICreateUserUseCase){}
  async handle(req: HttpRequest):Promise<HttpResponse>{
    const {email,password} = req.body
    return await this.createUserUseCase.execute({email,password})
  }
}