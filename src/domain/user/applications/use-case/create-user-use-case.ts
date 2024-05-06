import { User } from "../../enterprise/entities/user";
import { userRepository } from "../repositories/user-repository";

export class CreateUserUseCase{
    constructor(private userRepository:userRepository){}

    async execute(name:string, email:string){
        const newUser = new User(name, email)
        await this.userRepository.create(newUser)
        console.log(newUser)
        
        return newUser
    }
}