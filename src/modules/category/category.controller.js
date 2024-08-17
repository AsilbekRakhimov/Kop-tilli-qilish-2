import categoryService from "./category.service.js";

class CategoryController {
  #_service;
  constructor() {
    this.#_service = categoryService;
  }

  // create category
  createCategory = async (req, res) => {
    try {
      const data = await this.#_service.createOneCategory(req.body);
      res.status(201).send({
        data: data,
      });
    } catch (error) {
      res.status(409).send({
        message: "Error in controller while creating category",
      });
    }
  };
  // create category

  // get all categories
  getCategories = async (req, res) => {
    try {
        const data  = await this.#_service.getAllCategories(req.headers["accept-language"]);
        res.status(200).send({
            data:data
        })
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
  };
  // get all categories

  // get one category
  getCategory = async (req, res) => {
    try {
        const id = req.params.id
        const data = await this.#_service.getOneCategory(id, req.headers["accept-language"]);
        res.status(200).send({
            data:data
        })
    } catch (error) {
        res.status(409).send({
            message:"Error in getting one category"
        })
    }
  }
  // get one category

  // update category
  updateCategory = async (req,res) => {
    try {
        const id = req.params.id
        const data = await this.#_service.updateOneCategory({id, ...req.body});
        if (data) {
            res.status(200).send({
                message:"Category is updated"
            });
        }
        else{
            res.status(404).send({
                message:"Category is not found"
            });
        }
    } catch (error) {
        res.status(409).send({
            message:error.message
        })
    }
  }
  // update category

  // delete category
  deleteCategory = async (req, res) => {
    try {
        const data = await this.#_service.deleteOneCategory(req.params.id);
        if (data) {
            res.status(200).send({
                message:"Category is deleted"
            });
            return;
        }
        res.status(409).send({
            message:"Category is not found"
        })
    } catch (error) {
        res.status(409).send({
            message:"Error in deleting category"
        })
    }
  }
  // delete category

}

export default new CategoryController();
