import { User } from "../../domain/user/enterprise/entities/user";

export interface hashService{
    isPasswordCorrectlyHashed(password: string, user: User): Promise<Boolean>
    hashPassword(password: string): Promise<string>
}