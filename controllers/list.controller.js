const { list } = require("../models");

exports.add = (req, res) => {
  if (!req.body["name"].trim()) {
    res.status(422);
    res.send({answer: "Text is required"});
  }
  list.create(req.body)
  .then(data => {
   
    res.send(data);
  }).catch(err => {
    res.status(422).send({answer: err});
  })
}
