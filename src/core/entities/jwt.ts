import jwt from 'jsonwebtoken';
import { env } from '../env/env';

export interface IPayload {
    userId: string;
}
export interface TJwtService {
    sign(payload: object): string
    verify(token: string): jwt.JwtPayload | null
}
export class JwtService implements TJwtService{
    private secretKey: string

    constructor(){
        this.secretKey = env.JWT_SECRET
    }

    sign(payload: IPayload): string {
        return jwt.sign(payload, this.secretKey);
      }
    
    verify(token: string): IPayload | null {
        return jwt.decode(token) as IPayload | null;
    }
}
