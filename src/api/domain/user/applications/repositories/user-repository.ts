import { User } from "../../enterprise/entities/user";

export interface userRepository{
    create(user:User):Promise<void>
    findEmailByEmail(email:String):Promise<User|null>
    findById(id:String):Promise<User|null>
    findAll():Promise<User[]>
}