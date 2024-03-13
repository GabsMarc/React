import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from '../services/CreateCustomerService'


class CreateCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { name, lastname, email, password } = request.body as { name: string, lastname: string, email: string, password: string }


        const customerService = new CreateCustomerService()

        const customer = await customerService.execute({ name, lastname, email, password })

        reply.send(customer)
    }
}

export { CreateCustomerController }