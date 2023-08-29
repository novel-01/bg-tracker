const Joi = require("joi");
const { knex } = require("../database");

const validateInput = (schema, data) => {
  const { error } = schema.validate(data);
  return error;
};

const handleValidation = (schema, data, res) => {
  const error = validateInput(schema, data);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const { name } = req.body;

    const schema = Joi.object({
      name: Joi.string().max(32).required(),
    });

    handleValidation(schema, { name }, res);

    const data = await knex("categories_input")
        .insert({ input_category_name: name })
        .returning("*");

    res.status(201).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const find = async (req, res) => {
  try {
    const data = await knex("categories_input").select("*");

    res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await knex("categories_input")
        .select("*")
        .where({ input_category_id: id })
        .first();

    res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const schema = Joi.object({
      name: Joi.string().required(),
    });

    handleValidation(schema, { name: name.trim() }, res);

    const data = await knex("categories_input")
        .update({ input_category_name: name })
        .where({ input_category_id: id })
        .returning("*");

    res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  create,
  find,
  findOne,
  update,
};