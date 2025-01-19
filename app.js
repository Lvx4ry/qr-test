import express from "express";
import { productsRouter } from "./routers/products.router.js";
const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.json());

app.use("/products", productsRouter);

app.get("/", async (req, res) => {
  try {
    res.render("index.ejs");
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
