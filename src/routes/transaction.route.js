const {Router} = require("express");

const {
  create,
  find,
} = require("../controllers/transaction");

const router = Router();

router.post("/transaction", create);
router.get("/transaction", find);

module.exports = router;
