import { Request, Response } from "express";
import ProductModel from "../../../models/ProductModel";

const getProducts = async (req: Request, res: Response) => {
    const queryResponse = await ProductModel.findAll();
    if (!queryResponse) return res.status(500).json({ error: "internal server error" });
    res.status(200).json({ results: queryResponse });
}

export default getProducts;