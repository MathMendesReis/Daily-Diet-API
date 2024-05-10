import { UserRepositoryInMemory } from "../../../../../../__test__/repositorys -in-memory/user-repository-in-memory";
import { HashService } from "../../../../../core/entities/hashService";
import { CreateUserUseCase } from "../create-user-use-case";

export function makeCreateUserUseCase() {
    const userRepository = UserRepositoryInMemory.getInstance()
    const hashService = new HashService()
    return new CreateUserUseCase(userRepository,hashService)
}