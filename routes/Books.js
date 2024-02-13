const express = require("express");
const app = express();
const router = express.Router();

const { getAllBooks, getBookByID, addNewBook } = require("../controllers/Books");

router.get("/", getAllBooks);
router.get("/:id", getBookByID);
router.post("/", addNewBook);

module.exports = router;
