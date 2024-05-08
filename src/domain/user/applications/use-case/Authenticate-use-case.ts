import { hashService } from "../../../../core/contrats/hash-service-contratc";
import { JwtService } from "../../../../core/entities/jwt";
import { userRepository } from "../repositories/user-repository";

export class AuthenticateUseCase{
    constructor(
        private jwtService:JwtService,
        private userRepository:userRepository,
        private hashService:hashService
    ){}
    async execute(email:string, password:string){
        const userDB = await this.userRepository.findEmailByEmail(email)
        if(userDB === null){
            throw new Error('Not found User')
        }

        const  isPasswordCorrectlyHashed = await this.hashService.isPasswordCorrectlyHashed(password,userDB)
        if(!isPasswordCorrectlyHashed){
            throw new Error('Invalid credentials')
        }
        
        const user = {
            id:userDB.toValeu(),
            name: userDB.getName(),
            email: userDB.getEmail()
          };

        return this.jwtService.sign(user)

    }
}

