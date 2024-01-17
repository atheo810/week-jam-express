// define Router from express ( sesi-3 )
const { Router } = require("express");
const router = Router();

const bookRouter = require("./bookRouter"); // import bookRouter ( sesi-6 )

router.get("/", (req, res) => {
  res.json({ message: "Selamat Datang" });
});

router.use(bookRouter); // use bookRouter ( sesi-6 )

// export router ( sesi-3 )
module.exports = router;
