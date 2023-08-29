const {Router} = require("express");

const {
  find,
} = require("../controllers/history");

const router = Router();

router.get("/history", find);

module.exports = router;
