import createUser from "./controllers/createUser";
import createProduct from "./controllers/createProduct";
import loginVerify from "./controllers/loginVerify";
import getProducts from "./controllers/getProducts";
import verifyToken from "./middlewares/verifyToken";
import { Router } from "express";

const routes = Router();

routes.post("/user", createUser);
routes.post("/product", verifyToken, createProduct);
routes.get("/products", verifyToken, getProducts);
routes.post("/login", loginVerify);

export default routes;