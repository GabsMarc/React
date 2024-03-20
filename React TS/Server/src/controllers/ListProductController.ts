import { Request, Response } from 'express-serve-static-core';
import { ListProductService } from '../services/ListProductService';

class ListProductController {
    async handle(request: Request, response: Response) {

        try {
            const listProductService = new ListProductService()
            const product = await listProductService.execute()

            response.send(product)

        } catch (error) {

        }

    }
}

export { ListProductController }