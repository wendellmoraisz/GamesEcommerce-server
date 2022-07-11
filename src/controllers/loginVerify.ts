import { Request, Response } from "express";
import UserModel from "../models/UserModel";
import createAccessToken from "../services/createToken";

const loginVerify = async (req: Request, res: Response) => {
    const { user, password } = req.body;
    const results = await UserModel.findOne({
        where: {
            user,
            password,
        },
        attributes: ["user", "password", "id"],
    });
    if (results) {
        const token = createAccessToken(user, results.id);
        res.status(200).json({
            message: "login successfully",
            authToken: token,
        });
        return;
    }
    res.status(401).json("invalid login");
}

export default loginVerify;