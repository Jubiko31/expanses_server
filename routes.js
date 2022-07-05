module.exports = (app) => {
  const todosController = require("./controllers/list.controller.js")
  const router = require("express").Router();
  // router.get('/?id=:id([0-9]{3})', (req, res) => {
  //   const {id} = req.params;
  //   res.send({id, res: "Hello guys"});
  // })
  router.route("/:id")
  .get()
  .delete()
  .patch();

  router.route("/")
  .get()
  .post(todosController.add);

  app.use("/api/list", router);
}