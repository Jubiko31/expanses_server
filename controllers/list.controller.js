const { list } = require("../models");

exports.get = async (req, res) => {
  try {
    const all = await list.findAll();
    res.json(all);
  }
  catch (err) {
    res.status(422).send({answer: err});
  }
}