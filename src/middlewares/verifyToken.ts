import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import randomBytes from "../utils/randomBytes";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization;
    
    if (!authToken) return res.status(401).json({ error: "no token provided" });

    jwt.verify(authToken as string, randomBytes, error => {
        if (error) return res.status(401).json({ error: "invalid token" });
        next();
    });
}

export default verifyToken;