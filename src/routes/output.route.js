const {Router} = require("express");

const {
  find,
  findOne,
  create,
  update,
} = require("../controllers/output.controller");

const router = Router();

router.get("/output_category", find);
router.get("/output_category/:id", findOne);
router.post("/output_category", create);
router.put("/output_category/:id", update);

module.exports = router;
