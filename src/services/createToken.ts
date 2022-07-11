import jwt from "jsonwebtoken";
import "dotenv/config";

const createAccessToken = (user: string, id: number | undefined) => {
    const token = jwt.sign(
        { user, id },
        process.env.SECRET_TOKEN ?? "", // crypto.randomBytes(64).toString("hex")
        { expiresIn: "24h" });
    return token;
}

export default createAccessToken;