import { Request, Response } from "express";
import UserModel from "../../models/UserModel";

const createUser = async (req: Request, res: Response) => {
    const { user, password } = req.body;

    if (!user || !password) return res.status(400).json({ error: "insufficient data" });
    
    try {
        await UserModel.create({
            user: user,
            password: password,
        });
        res.status(200).json({ message: "account created successfully" });
    } catch (e) {
        res.status(400).json({ error: "user already exists" });
    }
}

export default createUser;