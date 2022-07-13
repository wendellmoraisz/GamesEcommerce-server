import { Request, Response } from "express"
import ProductModel from "../../../models/ProductModel";

const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.body;

    if (!id) return res.status(400).json({ error: "insufficient data" });

    const queryResult = await ProductModel.destroy({
        where: { id },
    });

    if (queryResult != 1) return res.status(400).json({ error: "product not exists" });

    return res.status(200).json({ message: "product deleted successfully" });
}

export default deleteProduct;