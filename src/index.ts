import express, { Request, Response } from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "olá" });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});