import { Request, Response } from "express";
import ProductModel from "../../../models/ProductModel";

const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, price, stockQuantity, imgSRC } = req.body;

    if (!name || !price || !stockQuantity || !imgSRC)
        return res.status(400).json({ error: "insufficient data" });

    try {
        const [queryResponse] = await ProductModel.update({
            name: name,
            price: price,
            stockQuantity: stockQuantity,
            imgSRC: imgSRC,
        },
            {
                where: { id },
            });

        if (queryResponse != 1)
            return res.status(400).json({ error: "product not exists" });

        return res.status(200).json({ message: "product updated successfully" });
    } catch (e) {
        res.status(400).json({ error: "invalid params" });
    }

}

export default updateProduct;