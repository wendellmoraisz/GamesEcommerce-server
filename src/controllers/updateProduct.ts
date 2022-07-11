import { Request, Response } from "express";
import ProductModel from "../models/ProductModel";

const updateProduct = async (req: Request, res: Response) => {
    const { id, name, price, stockQuantity, imgSRC } = req.body;

    if (!id || !name || !price || !stockQuantity || !imgSRC)
        return res.status(400).json({ error: "insufficient data" });

    const [queryResponse] = await ProductModel.update({
        name: name,
        price: price,
        stockQuantity: stockQuantity,
        imgSRC: imgSRC,
    },
        {
            where: { id },
        });

    if (queryResponse != 1) return res.status(400).json({ error: "product not exists" });
    return res.status(200).json({ message: "product updated successfully" });
}

export default updateProduct;