const Joi = require("joi");
const { knex } = require("../database");

const create = async (req, res, next) => {
    try {
        const { name, input_id, output_id, summa } = req.body;

        const schema = Joi.object({
            name: Joi.string().max(32).required(),
        });

        const { error } = schema.validate({ name });
        if (error) return res.status(400).json({ message: error.message });

        if (input_id) {
            await knex("history").insert({ summa, input_id });
            const [{ balance }] = await knex.select("balance").from("me");
            await knex("me").update({ balance: balance + summa });
            res.status(201).json({ message: "Success" });
        }
        if (output_id) {
            await knex("history").insert({ summa, output_id });
            const [{ balance }] = await knex.select("balance").from("me");
            await knex("me").update({ balance: balance - summa });
            res.status(201).json({ message: "Success" });
        }
    } catch (error) {
        console.log(error);
    }
};

const find = async (req, res, next) => {
    try {
        const data = await knex("me").select("*");

        res.json({ data });
    } catch (error) {
        console.log(error)
    }
};

module.exports = { create, find };