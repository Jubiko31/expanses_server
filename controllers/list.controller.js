
const { list } = require("../models");

exports.get = async (req, res) => {
  try {
    const all = await list.findAll();
    res.json(all);
  }
  catch (err) {
    console.error(err.message);
  }
}