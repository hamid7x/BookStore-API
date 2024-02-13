const express = require("express");
const app = express();
const booksRoutes = require("./routes/Books");

app.use(express.json());

app.use("/books", booksRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
