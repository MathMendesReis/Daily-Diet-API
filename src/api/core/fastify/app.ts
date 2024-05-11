import Fastify from "fastify";
import createMealController from "../../infra/http/meal-routers/create-meal-controller";
import deleteMealController from "../../infra/http/meal-routers/delete-meal-controller";
import findLongestStreakController from "../../infra/http/meal-routers/find-longest-streak-controller";
import findManyMealController from "../../infra/http/meal-routers/find-many-meal-controller";
import findUniqueMealById from "../../infra/http/meal-routers/find-unique-meal-by-id";
import authUserPassword from "../../infra/http/user-routers/auth-user-password";
import createUserController from "../../infra/http/user-routers/create-user-controller";

export const fastify = Fastify({
});


// users
createUserController(fastify);
authUserPassword(fastify)

//meals
createMealController(fastify)
deleteMealController(fastify)
findLongestStreakController(fastify)
findManyMealController(fastify)
findUniqueMealById(fastify)