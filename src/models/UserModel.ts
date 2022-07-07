import { DataTypes, Model, InferAttributes, InferCreationAttributes } from "sequelize";
import sequelize from "../config/database";

interface UserModel extends
    Model<InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>> {

    readonly id: number
    user: string
    password: string
}

const UserModel = sequelize.define<UserModel>("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
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
    }
});

export default UserModel;