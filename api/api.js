import express from 'express'
const router=express.Router()
import * as controllers from '../controllers/controllers.js'

router.get('/',controllers.home)

router.post('/about',controllers.about)

router.put('/contact',controllers.contact)



export default router;