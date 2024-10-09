import { Router } from 'express'
import { adaptRoute } from 'src/core/adpters/router-adpater'
import { makeCreateFoodController } from '../../factories/make-create-food-controller'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { makFindAllFoodController } from '../../factories/make-findall-foods-controller'
import { makeDeleteFoodController } from '../../factories/make-delete-food-controller'
export default (router: Router):void=>{
  router.post('/food',ensureAuthenticated, adaptRoute(makeCreateFoodController()))
  router.get('/food',ensureAuthenticated, adaptRoute(makFindAllFoodController()))
  router.delete('/food/id/:id',ensureAuthenticated, adaptRoute(makeDeleteFoodController()))
}

