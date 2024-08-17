import { CreateError } from "../../errors/create-error.js"
import { DeleteError } from "../../errors/delete-error.js"
import { GetDataError } from "../../errors/get-error.js"
import { UpdateError } from "../../errors/update-error.js"
import { category } from "../category/category.schema.js"
import { product } from "./product.schema.js"

class ProductService{
    #_model
    #_category_model
    constructor(){
        this.#_model = product
        this.#_category_model = category
    }

    // create product
    async createOneProduct({name, cost, count, categoryId}){
        try {
            const data = await this.#_model.insertMany({
                name:name,
                cost:cost,
                count:count,
                categoryId:categoryId
            });
            await this.#_category_model.updateOne({
                _id:categoryId
            },{
                $push:{
                    products:data
                }
            });
            return data;
        } catch (error) {
            throw new CreateError("Error in service while creating product")
        }
    }
    // create product

    // get all product
    async getAllProducts(language){
        try {
            if (language == "uzbek") {
                const data = await this.#_model.find().select("name.uz cost count");
                return data;
            }
            if (language == "english") {
                const data = await this.#_model.find().select("name.en cost count");
                return data;
            }
            if (language == "russian") {
                const data = await this.#_model.find().select("name.ru cost count");
                return data;
            }
            return []
        } catch (error) {
            throw new GetDataError("Error in service while getting data");
        }
    }
    // get all product

    // get one product
    async getOneProduct(id,language){
        try {
            if (language == "uzbek") {
                const data = await this.#_model.findById(id).select("name.uz cost count");
                return data;
            }
            if (language == "english") {
                const data = await this.#_model.findById(id).select("name.en cost count");
                return data;
            }
            if (language == "russian") {
                const data = await this.#_model.findById(id).select("name.ru cost count");
                return data;
            }
            return [];
        } catch (error) {
            throw new GetDataError("Error in service while getting one data");
        }
    }
    // get one product

    // update product
    async updateOneProduct({name, cost, count, categoryId, id}){
        try {
            const data = await this.#_model.findByIdAndUpdate(id, {
                $set:{
                    name:name,
                    cost:cost, 
                    count:count,
                    categoryId:categoryId                
                }
            })
            return data;
        } catch (error) {
            throw new UpdateError("Error in service while updating data");
        }
    }
    // update product

    // delete product
    async deleteOneProduct(id){
        try {
            const data = await this.#_model.deleteOne({_id:id});
            return data;
        } catch (error) {
            throw new DeleteError("Error in service while deleting product")
        }
    }
    // delete product
}

export default new ProductService();