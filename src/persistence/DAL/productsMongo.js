import { productsModel } from '../mongoDB/models/products.model'

class ProductsMongo {
    async findAll(){
        try {
            const response = await productsModel.find()
            return response
        } catch (error) {
            return error
        }
    }

    async findOneById(id){
        try {
            const response = await productsModel.findOneById(id)
            return response
        } catch (error) {
            return error
        }
    }

    async createOne(user){
        try {
            const response = await productsModel.create(user)
            return response
        } catch (error) {
            return error
        }
    }

    async deleteOne(id){
        try {
            const response = await productsModel.deleteOne(id)
        } catch (error) {
            return error
        }
    }
}

export const productsMongo = new ProductsMongo()