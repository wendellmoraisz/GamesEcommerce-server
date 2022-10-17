import express from "express";
import "dotenv/config";
import sequelize from "./config/database";
import ProductModel from "./models/ProductModel";
import UserModel from "./models/UserModel";
import routes from "./routes";
import cors from "cors";

ProductModel;
UserModel;
sequelize.sync()
    .then(() => console.log("Connect at database"));

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});