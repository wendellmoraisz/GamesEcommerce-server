import createUser from "./controllers/createUser";
import createProduct from "./controllers/createProduct";
import loginVerify from "./controllers/loginVerify";
import getProducts from "./controllers/getProducts";
import deleteProduct from "./controllers/deleteProduct";
import updateProduct from "./controllers/updateProduct";
import getProductByName from "./controllers/getProductByName";
import getProductByHighestPrice from "./controllers/getProductByHighestPrice";
import verifyToken from "./middlewares/verifyToken";
import { Router } from "express";

const routes = Router();

routes.post("/user", createUser);
routes.post("/products", verifyToken, createProduct);
routes.get("/products", verifyToken, getProducts);
routes.post("/login", loginVerify);
routes.delete("/products", verifyToken, deleteProduct);
routes.put("/products/:id", verifyToken, updateProduct);
routes.get("/products/nameStartsWith/:name", verifyToken, getProductByName);
routes.get("/products/HighestPrice", verifyToken, getProductByHighestPrice);

export default routes;