import prismaClient from "../prisma";

class ListProductService {
    async execute() {
        const product = prismaClient.product.findMany()

        return product
    }
}

export { ListProductService }