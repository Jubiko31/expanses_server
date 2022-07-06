module.exports = (app) => {
  const listController = require("./controllers/list.controller.js");
  const router = require("express").Router();
 
  router.route("/")
  .get(listController.get);
 
 app.use("/api/list", router);
}