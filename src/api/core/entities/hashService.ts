import { compare, hash } from "bcryptjs";
import { User } from "../../domain/user/enterprise/entities/user";
import { hashService } from "../contrats/hash-service-contratc";


export class HashService implements hashService{
    async isPasswordCorrectlyHashed(password:string, user:User){
        return await compare(password,user.getPasswordHash())
 
    }

    async hashPassword(password:string){
        return await hash(password, 6)
    }
}

