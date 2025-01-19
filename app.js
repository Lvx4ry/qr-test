import express from "express";

const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.json());

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/post", (req, res) => {
  console.log(req.body);
  res.send("Post request received");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
