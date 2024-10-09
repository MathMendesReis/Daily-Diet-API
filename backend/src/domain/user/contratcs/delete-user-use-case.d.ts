import type { ServerResponse } from "src/core/utils/server-response";

export interface IDeleteUserseCase{
  execute({id}:{id:string}):Promise<ServerResponse>
}