import { Sequelize } from "sequelize";
import pg from "pg";

// SQLITE
// export const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "./mydb.sqlite",
//   logging: false,
// });


// POSTGRES SQL

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "ep-lingering-smoke-a1v62b72-pooler.ap-southeast-1.aws.neon.tech", // or your PostgreSQL host
  port: 5432, // or your PostgreSQL port
  username: "default",
  dialectModule: pg, 
  password: "TCOyQm6tM9RV",
  database: "verceldb",
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  },
  logging: false,
});



// MYSQL

// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// module.exports = sequelize;