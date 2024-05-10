import Fastify from "fastify";
import authUserPassword from "../../infra/http/user-routers/auth-user-password";
import createUserController from "../../infra/http/user-routers/create-user-controller";

export const fastify = Fastify({
});

createUserController(fastify);
authUserPassword(fastify)



