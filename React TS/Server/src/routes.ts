import Express, { Request, Response } from 'express'
import { CreateCustomerController } from './controllers/CreateCustumerController';
import { ListCustomerController } from './controllers/ListCustomerController';
import { ListProductController } from './controllers/ListProductController';


const router = Express.Router()




router.get('/teste', (request: Request, response: Response) => {
    return console.log(response.send('Entrou no TESTE!'))
})


router.post('/register', async (request: Request, response: Response) => {
    return await new CreateCustomerController().handle(request, response);
})


router.get('/customer', async (request: Request, response: Response) => {
    return await new ListCustomerController().handle(request, response);
})


router.get('/product', async (request: Request, response: Response) => {
    return await new ListProductController().handle(request, response)
})


export { router }



