import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
    "postgres",
    "postgres",
    "senha", {
    dialect: "sqlite",
    host: "localhost",
});

export default sequelize;