import { MESSAGE_CODE } from "../config/message-code"
import { RestaurantDetailsDA } from "../dal/mongo/restaurantDetails"
import { CreateRestaurant, UpdateRestaurant } from "../interface/restaurant"
import { createLogger } from "../utils/create-logger"
import { safePromise } from "../utils/require-helpers"

const log = createLogger("restaurant-service")

class RestaurantService {

  private restaurantDetailsDA = new RestaurantDetailsDA()
  constructor() {
    this.create = this.create.bind(this)
  }

  public async create(data: CreateRestaurant): Promise<any> {
    const functionName = "create"

    const insertObj:CreateRestaurant = {
      restaurantName: data.restaurantName,
      description: data.description,
      location: data.location,
      priceFor2: data.priceFor2,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    if(data.menu) {
      insertObj.menu = data.menu
    }
    const [err, res] = await safePromise(this.restaurantDetailsDA.create(insertObj))
    if(err) {
      log.error(functionName, "Error while getting all restaurant details", err)
      return Promise.reject({
        messageCode: MESSAGE_CODE.INTERNAL_ERROR
      })
    }

    return {res}
  }

  public async get(): Promise<any> {
    const functionName = "get"
    const [err, res] = await safePromise(this.restaurantDetailsDA.findAllRestaurant())
    if(err) {
      log.error(functionName, "Error while getting all restaurant details", err)
      return Promise.reject({
        messageCode: MESSAGE_CODE.INTERNAL_ERROR
      })
    }

    return res
  }

  public async update(data:any): Promise<any> {
    const functionName = "update"

    const updateObj:UpdateRestaurant = {
      restaurantName: data.updateData.restaurantName,
      description: data.updateData.description,
      location: data.updateData.location,
      priceFor2: data.updateData.priceFor2,
      updatedAt: new Date()
    }

    if(data?.updateData?.menu) {
      updateObj.menu = data.updateData.menu
    }

    const [err, ] = await safePromise(this.restaurantDetailsDA.update(data.id, updateObj))
    if(err) {
      log.error(functionName, "Error while deleting the restaurant details", err)
      return Promise.reject({
        messageCode: MESSAGE_CODE.INTERNAL_ERROR
      })
    }
    return {}
  }

  public async delete(data:any): Promise<any> {
    const functionName = "delete"
    
    const [err, res] = await safePromise(this.restaurantDetailsDA.delete(data.id))
    if(err) {
      log.error(functionName, "Error while deleting the restaurant details", err)
      return Promise.reject({
        messageCode: MESSAGE_CODE.INTERNAL_ERROR
      })
    }
    return {}
  }

}

export default RestaurantService