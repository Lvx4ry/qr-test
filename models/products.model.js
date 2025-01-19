import { pool } from "../database/pg.js";

export class ProductsModel {
  constructor() {
    this.products = [];
  }

  static async getProducts({ params }) {
    try {
      const result = await pool.query("SELECT * FROM products");
      console.log(result.rows);
      return result.rows;
    } catch (err) {
      console.log(err);
    }
  }

  static async addProduct({ product }) {
    try {
      console.log(product);
      const { id, nombre, marca, precio, stock } = product;
      const result = await pool.query(
        "INSERT INTO products (product_id ,product_name, product_brand, product_price, product_stock) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (product_id) DO UPDATE SET product_stock = (SELECT product_stock + $5 FROM products) RETURNING product_id, product_name, product_brand, product_price, product_stock",
        [id, nombre, marca, precio, stock]
      );
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
