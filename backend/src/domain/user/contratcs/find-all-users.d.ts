import type { ServerResponse } from "src/core/utils/server-response";

export interface IFindAllUser{
  execute({id}:{id?:string}):Promise<ServerResponse>
}