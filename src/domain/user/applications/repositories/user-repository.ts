import { User } from "../../enterprise/entities/user";

export interface userRepository{
    create(user:User):Promise<void>
}