import { Request, Response } from "express";
import ProductModel from "../models/ProductModel";

const getProducts = async (req: Request, res: Response) => {
    const response = await ProductModel.findAll();
    res.json({results: response});
}

export default getProducts;