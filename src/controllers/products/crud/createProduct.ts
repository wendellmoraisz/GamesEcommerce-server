import { Request, Response } from "express";
import ProductModel from "../../../models/ProductModel";

const createProduct = async (req: Request, res: Response) => {
    const { name, imgSRC, stockQuantity, price } = req.body;

    if (!name || !imgSRC || !stockQuantity || !price) return res.status(400).json({ error: "insufficient data" });

    try {
        await ProductModel.create({
            name: name,
            imgSRC: imgSRC,
            stockQuantity: stockQuantity,
            price: price,
        });
        res.status(200).json({ message: "product registered successfully" });
    } catch (e) {
        res.status(500).json({ error: "internal server error" });
    }
}

export default createProduct;