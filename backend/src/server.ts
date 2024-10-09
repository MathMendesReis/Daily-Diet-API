import 'reflect-metadata'
import 'dotenv/config'
import initializeDatabase from './infra/database/typeorm/typeorm-setup'
import app from './infra/http/express/app'
import { _env } from '@/env'

const startServer = async () => {
    await initializeDatabase()
    app.listen(_env.PORT, () =>
      console.log(`Server running at: http://${_env.HOST}:${_env.PORT}`),
    )
  }
  
startServer()
