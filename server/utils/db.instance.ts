import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./mydb.sqlite",
  logging: false,
});



// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// module.exports = sequelize;