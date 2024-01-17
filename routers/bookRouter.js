// define Router from express ( sesi-6 )
const { Router } = require("express");
const router = Router();

// import BookController ( sesi-6 )
const bookController = require("../controllers/bookController");
const { getBook } = bookController; // destruct BookController ( sesi-6 )

router.get("/book", getBook); // router get book ( sesi-6 )

// export router to ./index.js
module.exports = router;
