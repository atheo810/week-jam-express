// define Router from express ( sesi-3 )
const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Selamat Datang" });
});

// export router ( sesi-3 )
module.exports = router;
