import type { Food } from "src/infra/database/typeorm/entity/Food";

export interface InputUpdateFood{
  name?:string,
  description?: string,
  isDiet?: boolean,
  id:string
}
export interface IUpdateFoodUseCase{
  execute(InputUpdateFood:InputFood):Promise<ServerResponse>
}

