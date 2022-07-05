module.exports = (sequelize, Sequelize) => {
  const list = sequelize.define("list",
    { 
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      }
    },
    {timestamps: false}
  )
  return list;
}