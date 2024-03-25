import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import prismaClient from "../prisma";

class ListProductService {
    async execute(request: Request, response: Response) {

        const productType = request.query.type

        try {
            const product = prismaClient.product.findMany({
                where: {
                    type: productType
                } as Prisma.productWhereInput
            })

            return product

        } catch (error) {
            return response.status(400).json({ error: "Erro ao encontrar os produtos" })
        }
    }
}

export { ListProductService }