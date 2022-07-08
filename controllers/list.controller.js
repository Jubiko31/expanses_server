const { list } = require("../models");

exports.add = (req, res) => {
  const { name } = req.body;
  const { price } = req.body;
  if (!req.body) {
    res.status(422);
    res.send({answer: "No input found."});
    return 0;
  } else if (name === "" || name === undefined || price === "" || price === undefined) {
    res.status(422);
    res.send({answer: "Invalid input"});
    return 0;
  } else if (price === null || price < 0) {
      res.status(422);
      res.send({answer: "Price should not be empty or negative!"});
      return 0;
  } else if (isNaN(price)) {
      res.status(422);
      res.send({answer: "Price should be a number!"});
      return 0;
  }
  list.create(req.body)
  .then(data => {
    res.send(data);
  }).catch(err => {
    res.status(422).send({answer: err});
  })
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
