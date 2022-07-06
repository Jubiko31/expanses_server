
const { list } = require("../models");

exports.get = async (req, res) => {
    const all = await list.findAll();
    res.json(all);
}