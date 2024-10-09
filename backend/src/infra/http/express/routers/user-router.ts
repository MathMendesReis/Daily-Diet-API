import { Router } from 'express'
import { adaptRoute } from 'src/core/adpters/router-adpater'
import { makeCreateUserController } from '../../factories/make-create-user-controller'
import { makeDeleteUserController } from '../../factories/make-delete-user-controller'
import { makeFindAllUserController } from '../../factories/make-find-all-users-controller'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
export default (router: Router):void=>{
  router.post('/usuarios',adaptRoute(makeCreateUserController()))
  router.get('/usuarios',ensureAuthenticated,adaptRoute(makeFindAllUserController()))
  router.get('/usuarios/id/:id',ensureAuthenticated,adaptRoute(makeFindAllUserController()))
  // router.put('/usuarios/id/:id',adaptRoute(makeCreateUserController()))
  router.delete('/usuarios/id/:id',ensureAuthenticated,adaptRoute(makeDeleteUserController()))
}

