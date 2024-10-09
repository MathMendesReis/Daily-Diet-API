import { _env } from "@/env"
import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host:  _env.HOST,
    port: _env.POSTGRES_PORT,
    username: _env.POSTGRES_USER,
    password:  _env.POSTGRES_PASSWORD,
    database:  _env.POSTGRES_DB,
    synchronize: true,
    logging: false,
    entities: ["src/infra/database/typeorm/entity/*.ts"],
    migrations: [],
    subscribers: [],
})


