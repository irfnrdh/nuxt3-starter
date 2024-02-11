import { sequelize } from "../utils/db.instance";

export default defineNitroPlugin(async (nitro) => {
  try {
      await sequelize.authenticate();      
      console.log('Connection has been established successfully.');
      await sequelize.sync({ alter: true });
      // await sequelize.sync({alter: true, force: true})
  } catch (error) {
      console.error('Unable to connect to the database:', error);
  }
})