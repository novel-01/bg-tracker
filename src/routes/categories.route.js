const {Router} = require("express");

const {
  find,
  findOne,
  create,
  update,
} = require("../controllers/categories.controller");

const router = Router();

router.get("/input_category", find);
router.get("/input_category/:id", findOne);
router.post("/input_category", create);
router.put("/input_category/:id", update);

module.exports = router;
