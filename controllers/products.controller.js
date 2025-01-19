import { ProductsModel } from "../models/products.model.js";
import {
  validateProduct,
  partialValidateProduct,
} from "../schemas/product.schema.js";

export class ProductsController {
  static async getProducts(req, res) {
    try {
      const { id } = req.params;
      const products = await ProductsModel.getProducts({ id });
      res.json(products);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  }

  static async createProduct(req, res) {
    try {
      console.log(req.body);
      const result = validateProduct(req.body);

      if (!result.success) {
        res.status(400).json(result.error);
        return;
      }
      const product = await ProductsModel.addProduct({ product: result.data });
      res.json({ product });
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Controller Error");
    }
  }
}
