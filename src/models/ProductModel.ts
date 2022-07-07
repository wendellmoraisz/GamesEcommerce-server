import { DataTypes, Model, InferAttributes, InferCreationAttributes } from "sequelize";
import sequelize from "../config/database";

interface ProductModel extends
    Model<InferAttributes<ProductModel>,
    InferCreationAttributes<ProductModel>> {

    readonly id: number
    name: string
    imgSRC: string
    stockQuantity: number
    price: number
    readonly createdAt: Date
    updatedAt?: Date
}

const ProductModel = sequelize.define<ProductModel>('product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imgSRC: {
        type: DataTypes.STRING,
    },
    stockQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
});

export default ProductModel;