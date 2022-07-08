module.exports = (app) => {

  const listController = require("./controllers/list.controller.js")
  const router = require("express").Router();

  router.route("/")
  .get(listController.get);
  
  router.route("/:id")
  .delete(listController.remove);

  app.use("/api/list", router);
}