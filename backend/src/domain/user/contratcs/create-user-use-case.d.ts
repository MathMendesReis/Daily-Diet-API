import type { ServerResponse } from "src/core/utils/server-response";

export interface ICreateUserUseCase{
  execute({email,password}:{email:string, password:string}):Promise<ServerResponse>
}