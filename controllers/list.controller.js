const { list } = require("../models");

exports.add = (req, res) => {
  const { name } = req.body;
  const { price } = req.body;
  if (!name || !price) {
    res.status(422);
    return res.send({answer: "Name or price input is not defined."});
  }  
  if (price < 0 || isNaN(price)) {
      res.status(422);
      return res.send({answer: "Price should be a positive number!"});
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
    return res.status(404).send({answer: "row not found."})
  }).catch(err => {
    res.status(422).send({answer: err});
  })
}

exports.updateInstance = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  if (id) {
    if (!name && !price) {
      return  res.end("Name or price input is not defined.")
    } else {
      if (name) {
        if (name.startsWith(" "))
          return res.end("Edited name cannot be empty or invalid format.")
      }
      if (price) {
        if (price < 0 || isNaN(price)) {
          return res.end("Edited price must be positive number.")
        }
      }   
    }

    try {
      const result = await list.update({ name, price }, {
        where: {id: id }
      });
      if (result[0] === 1) {
        return await this.get(req, res);
      } else {
      return res.status(404).send({ answer: 'Instance not found.' });
      }
  } catch (error) {
      return res.status(422).send({ answer: error });
  }
 }
}
