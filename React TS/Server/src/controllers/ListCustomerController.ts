import { Request, Response } from 'express-serve-static-core';
import { ListCustomerService } from '../services/ListCustomerService';

class ListCustomerController {
    async handle(request: Request, response: Response) {

        const email = request.query.email
        const password = request.query.password


        if (!email || !password) {
            return response.status(400).json({ error: 'Todos os campos precisam ser preenchidos!' });
        }

        try {
            const listCustomerService = new ListCustomerService()
            const customer = await listCustomerService.searchCustomer(request, response)
         
            response.send(customer)

        } catch (error) {
            // response.send(error)
        }
    }
}

export { ListCustomerController }