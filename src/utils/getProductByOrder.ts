import ProductModel from "../models/ProductModel";

const getProductByOrder = async (
    orderBy: "price" | "name",
    orderDirection: "ASC" | "DESC") => {

    try {
        const queryResponse = await ProductModel.findAll({
            order: [[orderBy, orderDirection]],
        });
        if (!queryResponse) return "error";
        return queryResponse;

    } catch (e) {
        return "error";
    }
}

export default getProductByOrder;