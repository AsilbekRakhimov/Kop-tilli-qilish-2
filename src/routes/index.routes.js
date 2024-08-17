import { Router } from "express";
import categoryRouter from '../modules/category/category.routes.js'

const router = Router();

router.use("/category", categoryRouter);

export default router;