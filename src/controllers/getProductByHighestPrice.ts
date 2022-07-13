import getProductByOrder from "../utils/getProductByOrder";
import { Response, Request } from "express";

const getProductByHighestPrice = async (req: Request, res: Response) => {
    const results = await getProductByOrder("price", "DESC");

    if (results === "error") return res.status(500).json({ error: "internal server error" });

    res.status(200).json({ results: results });
}

export default getProductByHighestPrice;