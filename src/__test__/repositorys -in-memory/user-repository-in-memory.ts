import { userRepository } from "../../domain/user/applications/repositories/user-repository";
import { User } from "../../domain/user/enterprise/entities/user";

export class UserRepositoryInMemory implements userRepository{
    private users: User[] = [];
    async create(user:User):Promise<void>{
        this.users = [...this.users, user]
    }
    
}

