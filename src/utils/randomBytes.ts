import crypto from "crypto";

const randomBytes = crypto.randomBytes(64).toString("hex");

export default randomBytes;