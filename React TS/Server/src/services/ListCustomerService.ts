import prismaClient from '../prisma'

class ListCustomerService{
    async execute(){

        const costumers = prismaClient.customer.findMany()

        return costumers
    }
}


export { ListCustomerService }