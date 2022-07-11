import createUser from "./controllers/createUser";
import createProduct from "./controllers/createProduct";
import loginVerify from "./controllers/loginVerify";
import { Router } from "express";
import getProducts from "./controllers/getProducts";
const routes = Router();

routes.post("/user", createUser);
routes.post("/product", createProduct);
routes.get("/products", getProducts);
routes.post("/login", loginVerify);

export default routes;