import { Request, Response } from "express";
import UserModel from "../../models/UserModel";
import createAccessToken from "../../services/createToken";

const loginVerify = async (req: Request, res: Response) => {
    const { user, password } = req.body;

    if (!user || !password) return res.status(400).json({ error: "insufficient data" });

    try {
        const results = await UserModel.findOne({
            where: {
                user,
                password,
            },
            attributes: ["id"],
        });

        if (results) {
            const token = createAccessToken(user, results.id as number);
            return res.status(200).json({ message: "login successfully", authToken: token });
        }
        res.status(401).json({ error: "invalid login" });

    } catch (e) {
        res.status(500).json({ error: "internal server error" });
    }
}

export default loginVerify;