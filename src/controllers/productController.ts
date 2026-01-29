import {Request, Response} from 'express'
import productService from '../services/productService'
import { sendError, sendSuccess } from '../utils/requestHandlers'

class ProductController {

  async getAllProducts(req: Request, res: Response) {
    try {
        const products = await productService.getAllProducts()
        sendSuccess(res, products)
    } catch (error: any) {
        sendError(res, error.message)
    }

  }
}

export default new ProductController();