module.exports = (sequelize, Sequelize) => {
    const list = sequelize.define("list",
      { 
        name: {
          type: Sequelize.STRING
        },
        price: {
          type: Sequelize.INTEGER
        }
      }
    ) 
    return list;
  }
