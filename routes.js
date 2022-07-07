module.exports = (app) => {
    const listController = require("./controllers/list.controller.js")
    const router = require("express").Router();
  
    router.route("/")
    .post(listController.add);
  
    app.use("/api/list", router);
  }
  