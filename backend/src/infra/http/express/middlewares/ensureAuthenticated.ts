import { NextFunction, Request, Response } from 'express'
import { Jsonwebtoken } from 'src/core/jsonwebtoken/jsonwebtoken'

export  function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
):void {
  const authToken = req.headers.authorization
  if (!authToken) {
    res.status(401).json({
      message: 'Token não encontrado',
    })
  }
  
  const [, token] = authToken.split(' ')
  const jsonwebtoken = new Jsonwebtoken()
  try {
    jsonwebtoken.verify(token)
    req.headers.authorization = token
    return next()
  } catch {
     res.status(401).json({
      message: 'Token inválido',
    })
  }
}