const { pool } = require("../config/db");
const { list } = require("../models");

exports.add = (req, res) => {
  if (!req.body["name"].trim()) {
    res.status(422);
    res.send({answer: "Text is required"});
  }
  list.create(req.body)
  .then(async(data) => {
    res.send(await todos.findAll());
  }).catch(err => {
    res.status(422).send({answer: err});
  })
}

exports.remove = (req, res) => {
  const {id} = req.params;
  if (!id.trim()) {
    res.status(422).send({answer: "Invalid id"})
  }
  list.destroy({where: {id}})
  .then(async(removed) =>  {
    if(removed) {
      const all = await list.findAll();
      return res.send(all);
    }
    return res.status(404).send({answer: "row not found"})
  }).catch(err => {
    res.status(422).send({answer: err});
  })
}

exports.get = async (req, res) => {
  const { id } = req.params;
  try {
    const all = await pool.query("SELECT * FROM lists WHERE id = $1", [
      id
    ]);

    res.json(all.rows[0])
  } catch (error) {
    console.log(err.message);
  }
}