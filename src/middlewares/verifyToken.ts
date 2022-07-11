import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization;
    if (!authToken) return res.status(401).json({ error: "no token provided" });

    jwt.verify(authToken as string, process.env.SECRET_TOKEN as string, error => {
        if (error) return res.status(401).json({ error: "invalid token" });
        next();
    });
}

export default verifyToken;