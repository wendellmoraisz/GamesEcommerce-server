import { Request, Response } from "express";
import UserModel from "../models/UserModel";

interface BodyRequest {
    user: string
    password: string
}

const createUser = async (req: Request, res: Response) => {
    const { user, password }: BodyRequest = req.body;
    try {
        await UserModel.create({
            user: user,
            password: password,
        });
        res.json({
            response: {
                code: 200,
                message: "user created successfully",
            }
        });
    } catch (e) {
        res.json({
            error: {
                code: 401,
                message: "error creating user",
            }
        });
    }
}

export default createUser;