import productService from "./product.service.js";

class ProductController {
  #_service;
  constructor() {
    this.#_service = productService;
  }

  // create product
  createProduct = async (req, res) => {
    try {
      const data = await this.#_service.createOneProduct(req.body);
      res.status(201).send({
        data: data,
      });
    } catch (error) {
      res.status(409).send({
        message: "Error in creating product",
      });
    }
  };
  // create product

  // get all product
  getProducts = async (req, res) => {
    try {
      const data = await this.#_service.getAllCategories(
        req.headers["accept-language"]
      );
      res.status(200).send({
        data: data,
      });
    } catch (error) {
      res.status(409).send({
        message: "Error in getting data",
      });
    }
  };
  // get all product

  // get one product
  getProduct = async (req, res) => {
    try {
      const data = await this.#_service.getOneProduct(
        req.params.id,
        req.headers["accept-language"]
      );
      res.status(200).send({
        data: data,
      });
    } catch (error) {
      res.status(409).send({
        data: "Error in getting one product",
      });
    }
  };
  // get one product

  // update product
  updateProduct = async (req, res) => {
    try {
      const id = req.params.id;
      const data = await this.#_service.updateOneProduct({ id, ...req.body });
      if (data) {
        res.status(203).send({
          message: "Product is updated",
        });
        return;
      }
      res.status(404).send({
        message: "Product is not found!",
      });
    } catch (error) {
      res.status(409).send({
        message: "Error in updating product",
      });
    }
  };
  // update product

  // delete product
  deleteProduct = async (req, res) => {
    try {
      const data = await this.#_service.deleteOneProduct(req.params.id);
      if (data.acknowledged && data.deletedCount > 0) {
        res.status(200).send({
          message: "Product is deleted",
        });
        return;
      }
      res.status(404).send({
        message: "Product is not found!",
      });
    } catch (error) {
      res.status(409).send({
        message: "Error in delete product",
      });
    }
  };
  // delete product
}

export default new ProductController();
