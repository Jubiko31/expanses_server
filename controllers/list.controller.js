const { list } = require("../models");

exports.add = (req, res) => {
  const { name } = req.body;
  const { price } = req.body;
  if (name == "" || name == undefined) {
    res.status(422);
    res.send({answer: "Shop name is required!"});
    return 0;
  } else if (price == null || price < 0 || price == "" || price == undefined) {
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