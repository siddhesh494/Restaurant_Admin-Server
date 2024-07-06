import * as express from "express"
import RestaurantController from "../../controllers/restaurant"
import validator from "../../middlewares/request-body-validation"
import hashPassword from "../../middlewares/hash-password"
import { VALIDATE_MODULE_NAMES } from "../../config/validator-config" 
import adminProtected from "../../middlewares/admin-protected"
const RESTAURANT = VALIDATE_MODULE_NAMES.restaurant

const router = express.Router()
const restaurantController = new RestaurantController()

router.post("/create", validator(RESTAURANT.module, RESTAURANT.route.CREATE), restaurantController.create)
router.post("/get", validator(RESTAURANT.module, RESTAURANT.route.GET), restaurantController.get)
router.post("/update", validator(RESTAURANT.module, RESTAURANT.route.UPDATE), restaurantController.update)
router.post("/delete", validator(RESTAURANT.module, RESTAURANT.route.DELETE), restaurantController.delete)


export = router