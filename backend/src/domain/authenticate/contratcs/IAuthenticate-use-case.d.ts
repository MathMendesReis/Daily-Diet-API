import type { ServerResponse } from "src/core/utils/server-response";

export interface IAuthenticateUseCase{
  execute({email,password}:{email:string, password:string}):Promise<ServerResponse>
}