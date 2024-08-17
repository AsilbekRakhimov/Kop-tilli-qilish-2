import { CreateError } from "../../errors/create-error.js";
import { DeleteError } from "../../errors/delete-error.js";
import { GetDataError } from "../../errors/get-error.js";
import { UpdateError } from "../../errors/update-error.js";
import { category } from "./category.schema.js";

class CategoryService {
  #_model;
  constructor() {
    this.#_model = category;
  }

  // create category
  async createOneCategory({ name, description }) {
    try {
      const data = await this.#_model.insertMany({
        name: name,
        description: description,
      });
      return data;
    } catch (error) {
      throw new CreateError("Category create qilishda xatolik in service");
    }
  }
  // create category

  // get all categories
  async getAllCategories(language) {
    try {
      if (language == "uzbek") {
        const data = await this.#_model
          .find()
          .select("name.uz description.uz products");
        return data;
      }
      if (language == "english") {
        const data = await this.#_model
          .find()
          .select("name.en description.en products");
        return data;
      }
      if (language == "russian") {
        const data = await this.#_model
          .find()
          .select(`name.ru description.ru products`);
        return data;
      }
      return [];
    } catch (error) {
      throw new GetDataError("Error in service while getting all categories");
    }
  }
  // get all categories

  // get one category
  async getOneCategory(id, language) {
    try {
      if (language == "uzbek") {
        const data = await this.#_model
          .findById(id)
          .select("name.uz description.uz products");
        return data;
      }
      if (language == "english") {
        const data = await this.#_model
          .findById(id)
          .select("name.en description.en products");
        return data;
      }
      if (language == "russian") {
        const data = await this.#_model
          .findById(id)
          .select(`name.ru description.ru products`);
        return data;
      }
      return []
    } catch (error) {
      throw new GetDataError("Error in service while getting on category");
    }
  }
  // get one category

  // update category
  async updateOneCategory({id, name, description}){
    try {
        const data = await this.#_model.findByIdAndUpdate(id, {
            $set:{
                name:name,
                description:description
            }
        });
        return data;
    } catch (error) {
        throw new UpdateError("Error in service while updating category")
    }
  }
  // update category

  // delete category
  async deleteOneCategory(id){
    try {
        const data = await this.#_model.findByIdAndDelete(id);
        console.log(data);
        return data;
    } catch (error) {
        throw new DeleteError("Error in service while deleting category")
    }
  }
  // delete category

}

export default new CategoryService();
