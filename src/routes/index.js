const categoriesRoute = require("./categories.route");
const outputcategoriesRoute = require("./output.route")
const transaction = require("./transaction.route")
const history = require("./history")

module.exports = [categoriesRoute, outputcategoriesRoute, transaction, history];
