module.exports = (app) => {
  const listController = require("./controllers/list.controller.js")
  const router = require("express").Router();
  // router.get('/?id=:id([0-9]{3})', (req, res) => {
  //   const {id} = req.params;
  //   res.send({id, res: "Hello guys"});
  // })
  router.route("/:id")
  .delete(listController.remove);

  router.route("/")
  .post(listController.add);

  app.use("/api/list", router);
}