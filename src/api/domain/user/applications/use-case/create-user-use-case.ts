import { hashService } from '../../../../core/contrats/hash-service-contratc';
import { User } from "../../enterprise/entities/user";
import { userRepository } from "../repositories/user-repository";


export class CreateUserUseCase{
    constructor(
    private userRepository:userRepository,        
    private hashService:hashService
    ){}

    async execute(name:string, email:string,password:string){
        const password_hash = await this.hashService.hashPassword(password)
        const newUser = new User(name, email,password_hash)
        await this.userRepository.create(newUser)
        
        return newUser
    }
}