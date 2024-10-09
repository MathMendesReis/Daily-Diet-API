export interface IJsonwebtoken{
  sign(payload:any):string
  verify(token:string):any
}