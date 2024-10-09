import type { Controller } from "src/core/types/http/controller";
import type { HttpRequest, HttpResponse } from "src/core/types/http/http";
import type { IAuthenticateUseCase } from "src/domain/authenticate/contratcs/IAuthenticate-use-case";
export class AuthenticateController implements Controller{
  constructor(private readonly useCase:IAuthenticateUseCase){}
  async handle(req: HttpRequest):Promise<HttpResponse>{
    const {email,password} = req.body
    return await this.useCase.execute({email,password})
  }
}