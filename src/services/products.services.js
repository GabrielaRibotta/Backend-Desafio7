import { productsMongo } from '../persistence/DAL/productsMongo.js'

class ProductsService {
    async findAllProducts(){
        try {
            const response = await productsMongo.findAll()
            return response
        } catch (error) {
            return error
        }
    }

    async findOneProduct(id){
        try {
            const response = await productsMongo.findOneById(id)
            return response
        } catch (error) {
            return error
        }
    }

    async createOneProduct(product){
        try {
            const response = await productsMongo.createOne(product)
        } catch (error) {
            return error
        }
    }

    async deleteOneProduct(id){
        try {
            const response = await productsMongo.deleteOne(id)
            return response
        } catch (error) {
            return error
        }
    }
}

export const productsService = new ProductsService()