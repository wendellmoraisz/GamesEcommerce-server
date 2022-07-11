import { Request, Response } from "express"
import { Op } from "sequelize";
import ProductModel from "../models/ProductModel";

const getProductByName = async (req: Request, res: Response) => {
    const { name } = req.params;

    try {
        const queryResult = await ProductModel.findAll({
            where: {
                name: {
                    [Op.like]: `${name}%`,
                }
            }
        });
        res.status(200).json({ result: queryResult });
    } catch (e) {
        res.status(500).json({ error: "internal server error" });
    }
}

export default getProductByName;