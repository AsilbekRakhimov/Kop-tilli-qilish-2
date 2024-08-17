import { Router } from "express";
import { validationMiddlewar } from "../../middlewares/validation.middleware.js";
import { createProductSchema } from "./dtos/create.product.dto.js";
import productController from "./product-controller.js";
import { updateProductSchema } from "./dtos/update.product.dto.js";

const router = Router();

router.post("/", validationMiddlewar(createProductSchema), productController.createProduct);
router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.put("/:id", validationMiddlewar(updateProductSchema), productController.updateProduct);
router.delete("/:id", productController.deleteProduct);


export default router;