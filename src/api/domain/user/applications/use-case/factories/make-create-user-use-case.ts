import { HashService } from "../../../../../core/entities/hashService";
import { userRepository } from "../../repositories/user-repository";
import { CreateUserUseCase } from "../create-user-use-case";

export function makeCreateUserUseCase(userRepository:userRepository) {
    const hashService = new HashService()
    return new CreateUserUseCase(userRepository,hashService)
}