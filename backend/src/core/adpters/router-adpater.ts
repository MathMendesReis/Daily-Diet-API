import { Request, Response } from 'express'
import type { Controller } from '../types/http/controller'
import { ServerResponse } from '../utils/server-response'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    try {
      const httpResponse = await controller.handle(req)
       res.status(httpResponse.statusCode).json(httpResponse.data)
      } catch (error) {
        if(error instanceof ServerResponse){
          res.status(error.statusCode).json(error.data)
          return
        }
        res.status(500).json(error)
    }
  }
}