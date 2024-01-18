// define Router from express ( sesi-6 )
const { Router } = require("express");
const router = Router();

// import BookController ( sesi-6 )
const bookController = require("../controllers/bookController");
const { getBook, getBookById, createBook, updateBook, deleteBook } =
  bookController; // destruct BookController ( sesi-6 )

router.get("/book", getBook); // router get book ( sesi-6 )
router.post("/book", createBook); // router post book ( sesi-8 )
router.get("/book/:id", getBookById); // router get book by id ( sesi-7 )
router.put("/book/:id", updateBook); // router get book by id ( sesi-9 )
router.delete("/book/:id", deleteBook); // router get book by id ( sesi-10 )
// export router to ./index.js
module.exports = router;
