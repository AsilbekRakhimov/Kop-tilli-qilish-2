import { Router } from "express";
import categoryController from "./category.controller.js";
import { validationMiddlewar } from "../../middlewares/validation.middleware.js";
import { createCategorySchema } from "./dto/create-category.dto.js";
import { updateCategorySchema } from "./dto/update-category.dto.js";

const router = Router();

router.post(
  "/",
  validationMiddlewar(createCategorySchema),
  categoryController.createCategory
);
router.get("/", categoryController.getCategories);
router.get("/:id", categoryController.getCategory);
router.put(
  "/:id",
  validationMiddlewar(updateCategorySchema),
  categoryController.updateCategory
);

router.delete("/:id", categoryController.deleteCategory);

export default router;
