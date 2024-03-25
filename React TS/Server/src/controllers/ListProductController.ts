import { Request, Response } from 'express';
import { ListProductService } from '../services/ListProductService';

class ListProductController {
    async handle(request: Request, response: Response) {

        try {
            const listProductService = new ListProductService()
            const product = await listProductService.execute(request, response)

            response.send(product)

        } catch (error) {

        }

    }
}

export { ListProductController }