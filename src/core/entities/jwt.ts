import jwt from 'jsonwebtoken';

export class JwtService{
    private secretKey: string

    constructor(secretKey: string){
        this.secretKey = secretKey
    }

    sign(payload: object): string {
        return jwt.sign(payload, this.secretKey);
      }
    
    verify(token: string): jwt.JwtPayload | null {
        return jwt.decode(token) as jwt.JwtPayload | null;
    }
}
