import { userRepository } from "../../repositories/user-repository";
import { CreateUserUseCase } from "../create-user-use-case";

export function makeCreateUserUseCase(userRepository:userRepository) {
    return new CreateUserUseCase(userRepository)
}