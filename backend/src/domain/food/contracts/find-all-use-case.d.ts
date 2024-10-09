import type { Food } from "src/infra/database/typeorm/entity/Food";

export interface Props {
  token:string,
  page?:string,
  limit?:string
}
export interface IFindAllUseCase{
  execute(Props:Props):Promise<ServerResponse>
}