import { Router } from "express";
import categoryRouter from '../modules/category/category.routes.js';
import productRouter from '../modules/product/product.routes.js';

const router = Router();

router.use("/category", categoryRouter);
router.use("/product", productRouter);

export default router;