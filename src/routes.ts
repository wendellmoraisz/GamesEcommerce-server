import createUser from "./controllers/createUser";
import createProduct from "./controllers/createProduct";
import { Router } from "express";
const routes = Router();

routes.post("/user", createUser);
routes.post("/product", createProduct);

export default routes;