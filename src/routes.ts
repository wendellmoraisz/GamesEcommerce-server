import createUser from "./controllers/createUser";
import createProduct from "./controllers/createProduct";
import { Router } from "express";
import getProducts from "./controllers/getProducts";
const routes = Router();

routes.post("/user", createUser);
routes.post("/product", createProduct);
routes.get("/products", getProducts);

export default routes;