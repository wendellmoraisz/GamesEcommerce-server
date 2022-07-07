import { Request, Response } from "express";
import ProductModel from "../models/ProductModel";

interface BodyRequest {
    name: string
    imgSRC: string
    stockQuantity: number
    price: number
}

const createProduct = async (req: Request, res: Response) => {
    const { name, imgSRC, stockQuantity, price }: BodyRequest = req.body;
    try {
        ProductModel.create({
            name: name,
            imgSRC: imgSRC,
            stockQuantity: stockQuantity,
            price: price,
        });
        res.json({
            response: {
                code: 200,
                message: "product successfully created",
            }
        });
    } catch (e) {
        res.json({
            error: {
                code: 401,
                message: "error creating product",
            }
        });
    }
}

export default createProduct;