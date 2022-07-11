import createUser from "./controllers/createUser";
import createProduct from "./controllers/createProduct";
import loginVerify from "./controllers/loginVerify";
import getProducts from "./controllers/getProducts";
import deleteProduct from "./controllers/deleteProduct";
import verifyToken from "./middlewares/verifyToken";
import { Router } from "express";

const routes = Router();

routes.post("/user", createUser);
routes.post("/product", verifyToken, createProduct);
routes.get("/products", verifyToken, getProducts);
routes.post("/login", loginVerify);
routes.delete("/products", verifyToken, deleteProduct);

export default routes;