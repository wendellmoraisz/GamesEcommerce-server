import "dotenv/config";
import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASSWORD as string, {
    dialect: "mysql",
    host: "localhost",
});

export default sequelize;