import { Router } from "express";
import { ProductsController } from "../controllers/products.controller.js";
export const productsRouter = Router();

productsRouter.get("/", ProductsController.getProducts);

productsRouter.post("/", ProductsController.createProduct);
