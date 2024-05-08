import { HashService } from "../../../../../core/entities/hashService";
import { JwtService } from "../../../../../core/entities/jwt";
import { userRepository } from "../../repositories/user-repository";
import { AuthenticateUseCase } from "../Authenticate-use-case";

export function makeAuthenticateUseCase(userRepository:userRepository) {
    const jwtService = new JwtService('123')
    const hashService = new HashService()
    return new AuthenticateUseCase(jwtService,userRepository,hashService)
}