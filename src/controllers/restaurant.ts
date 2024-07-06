import { Request, Response } from 'express'
import RestaurantService from '../services/restaurant'
import { safePromise } from '../utils/require-helpers'
import { createLogger } from '../utils/create-logger'
import { response } from '../utils/response-helpers'
import { MESSAGE_CODE } from '../config/message-code'


const log = createLogger("review-controller")

class RestaurantController {
  private restaurantService = new RestaurantService()

  constructor() {
    this.create = this.create.bind(this);
    this.get = this.get.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  public async create(req: Request | any, res: Response): Promise<any> {
    const functionName = "create-controller"
    try {
      const [error,] = await safePromise(this.restaurantService.create(req.body))
      if(error) {
        log.error(functionName, "Error while creating restaurant", error)
        return res.status(error?.messageCode?.status || 500).json(response(error))
      }

      return res.status(200).json(response({
        success: true,
        messageCode: MESSAGE_CODE.SUCCESS
      }))  
    } catch (error) {
      return res.status(500).json(response({
        success: false,
        messageCode: MESSAGE_CODE.INTERNAL_ERROR
      }))
    }
  }

  public async get(req: Request | any, res: Response): Promise<any> {
    const functionName = "get-controller"
    try {
      const [error, result] = await safePromise(this.restaurantService.get())
      if(error) {
        log.error(functionName, "Error while getting restaurant", error)
        return res.status(error?.messageCode?.status || 500).json(response(error))
      }

      return res.status(200).json(response({
        success: true,
        messageCode: MESSAGE_CODE.SUCCESS,
        data: result
      }))  
    } catch (error) {
      return res.status(500).json(response({
        success: false,
        messageCode: MESSAGE_CODE.INTERNAL_ERROR
      }))
    }
  }

  public async update(req: Request | any, res: Response): Promise<any> {
    const functionName = "update-controller"
    try {
      const [error, result] = await safePromise(this.restaurantService.update(req.body))
      if(error) {
        log.error(functionName, "Error while updating restaurant", error)
        return res.status(error?.messageCode?.status || 500).json(response(error))
      }

      return res.status(200).json(response({
        success: true,
        messageCode: MESSAGE_CODE.SUCCESS,
        data: "Updated successfully"
      }))  
    } catch (error) {
      return res.status(500).json(response({
        success: false,
        messageCode: MESSAGE_CODE.INTERNAL_ERROR
      }))
    }
  }

  public async delete(req: Request | any, res: Response): Promise<any> {
    const functionName = "delete-controller"
    try {
      const [error, result] = await safePromise(this.restaurantService.delete(req.body))
      if(error) {
        log.error(functionName, "Error while removing restaurant", error)
        return res.status(error?.messageCode?.status || 500).json(response(error))
      }

      return res.status(200).json(response({
        success: true,
        messageCode: MESSAGE_CODE.SUCCESS,
        data: "Deleted successfully"
      }))  
    } catch (error) {
      return res.status(500).json(response({
        success: false,
        messageCode: MESSAGE_CODE.INTERNAL_ERROR
      }))
    }
  }


}

export default RestaurantController