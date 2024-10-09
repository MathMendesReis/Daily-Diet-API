import { Router } from 'express'
import { adaptRoute } from 'src/core/adpters/router-adpater'
import { makeAuthenticateController } from '../../factories/make-authenticate-controller'
export default (router: Router):void=>{
  router.post('/login',adaptRoute(makeAuthenticateController()))
}

