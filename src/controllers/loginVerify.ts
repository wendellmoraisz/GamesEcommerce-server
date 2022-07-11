import { Request, Response } from "express";
import UserModel from "../models/UserModel";

const loginVerify = async (req: Request, res: Response) => {
    const results = await UserModel.findOne({
        where: {
            user: req.body.user,
            password: req.body.password,
        }
    });
    if (!results) {
        res.status(401).json("unauthorized");
        return;
    }
    res.status(200).json("login successfully");
}

export default loginVerify;