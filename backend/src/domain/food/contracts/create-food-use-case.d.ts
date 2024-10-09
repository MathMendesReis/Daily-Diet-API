import type { Food } from "src/infra/database/typeorm/entity/Food";

export interface InputFood{
  name:string,
  description: string,
  isDiet: boolean
  token:string
}
export interface ICreateFoodUseCase{
  execute(InputFood:InputFood):Promise<ServerResponse>
}

