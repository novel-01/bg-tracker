const {knex} = require("../database");

const find = async (req, res) => {
    try {
      const data = await knex("history").select("*");
  
      res.json({data});
    } catch (error) {
      console.log(error);
    }
  };
module.exports = {find}