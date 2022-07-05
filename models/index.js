const dbConfig = require("../config/db.js");
const Sequelize = require("sequelize");

const {DB, USER, PASSWORD, HOST, pool} = dbConfig;
const sequelize = new Sequelize(DB, USER, PASSWORD, {
    HOST,
    dialect: "postgres",
    pool: {
      max: pool.max,
      min: pool.min,
      acquire: pool.acquire,
      idle: pool.idle 
    }
  }
 )

 const list = require("./list.model")(sequelize, Sequelize);
// console.log(list)
module.exports = {list, sequelize, Sequelize}