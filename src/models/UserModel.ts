import { DataTypes, Model, InferAttributes, InferCreationAttributes } from "sequelize";
import sequelize from "../config/database";

interface UserModel extends
    Model<InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>> {

    readonly id?: number
    user: string
    password: string
    readonly createdAt: Date
    updatedAt?: Date
}

const UserModel = sequelize.define<UserModel>("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
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

export default UserModel;