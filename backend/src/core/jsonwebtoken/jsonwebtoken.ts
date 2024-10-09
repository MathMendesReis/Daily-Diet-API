import jwt from 'jsonwebtoken'
import type { IJsonwebtoken } from './ijsonwebtoken';
export class Jsonwebtoken implements IJsonwebtoken{
  private secretKey:string = 'secret-key'
  sign(payload:any){
  return jwt.sign(payload, this.secretKey);
  }

  verify(token:string){
    return jwt.verify(token, this.secretKey);
  }
}