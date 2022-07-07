import "dotenv/config";
import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
    process.env.DB_NAME ?? "",
    process.env.DB_USER ?? "",
    process.env.DB_PASSWORD ?? "", {
    dialect: "mysql",
    host: "localhost",
});

export default sequelize;