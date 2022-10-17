import jwt from "jsonwebtoken";
import "dotenv/config";
import randomBytes from "../utils/randomBytes";

const createAccessToken = (user: string, id: number) => {
    const token = jwt.sign(
        { user, id },
        randomBytes,
        { expiresIn: "24h" });
    return token;
}

export default createAccessToken;