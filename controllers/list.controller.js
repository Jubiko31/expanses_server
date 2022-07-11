const { list } = require("../models");

exports.add = async (req, res) => {
  const { name } = req.body;
  const { price } = req.body;
  if (!name || !price) {
    res.status(422);
    return res.send({answer: "Name or price input is not defined."});
  }  
  if (price < 0 && isNaN(price)) {
      res.status(422);
      return res.send({answer: "Price should be a positive number!"});
  }
  try {
    const newInstance = await list.create(req.body);
    return newInstance && (await this.get(req, res));
  } catch (error) {
    return res.status(422).send({ answer: error })
  }
}

exports.get = async (req, res) => {
  try {
    const all = await list.findAll();
    res.json(all);
  }
  catch (err) {
    res.status(422).send({answer: err});
  }
}

exports.remove = (req, res) => {
  const { id } = req.params;
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
