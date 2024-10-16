import { _env } from "@/env";
import express from 'express'
import { setupRouter } from "./setup-router";

const app = express()
app.use(express.json())
setupRouter(app)

export default app