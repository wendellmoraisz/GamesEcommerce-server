import express, { Request, Response } from "express";
import "dotenv/config";
import sequelize from "./config/database";

sequelize.sync();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "olá" });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});