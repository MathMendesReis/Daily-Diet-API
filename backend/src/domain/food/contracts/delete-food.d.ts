
export interface InputDeleteFood{
  id:string
}
export interface IDeleteFoodUseCase{
  execute(InputUpdateFood:InputDeleteFood):Promise<ServerResponse>
}

