import Sequelize from "sequelize";
import db from "dotenv"

// Option 1: Passing a connection URI
const sequelize = new Sequelize(db) 

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}