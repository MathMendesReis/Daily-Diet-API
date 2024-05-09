import { UserRepositoryInMemory } from "../../../../../__test__/repositorys -in-memory/user-repository-in-memory";
import { HashService } from "../../../../../core/entities/hashService";
import { JwtService } from "../../../../../core/entities/jwt";
import { AuthenticateUseCase } from "../Authenticate-use-case";

export function makeAuthenticateUseCase() {
    const userRepository = UserRepositoryInMemory.getInstance();
    const jwtService = new JwtService()
    const hashService = new HashService()
    return new AuthenticateUseCase(jwtService,userRepository,hashService)
}
