module.exports = (app) => {
  const listController = require("./controllers/list.controller.js")
  const router = require("express").Router();
  
//   router.route("/:id")
//   .get()
//   .delete()
//   .patch();

  router.route("/")
  .post(todosController.add);

  app.use("/api/list", router);
}
