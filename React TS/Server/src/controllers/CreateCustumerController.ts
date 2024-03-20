import { Request, Response } from 'express-serve-static-core';
import { CreateCustomerService } from '../services/CreateCustumerService';



class CreateCustomerController {
    async handle(request: Request, response: Response) {

             const { name, lastname, email, password } = request.body;

        try {

            const customerService = new CreateCustomerService();
            const customer = await customerService.execute({ name, lastname, email, password });

            response.send(customer);
        } catch (error) {
            response.status(200).send(error.message);
        }
    }
}

export { CreateCustomerController };
