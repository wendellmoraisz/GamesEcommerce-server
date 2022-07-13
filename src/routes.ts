import createUser from "./controllers/users/createUser";
import createProduct from "./controllers/products/crud/createProduct";
import loginVerify from "./controllers/users/loginVerify";
import getProducts from "./controllers/products/crud/getProducts";
import deleteProduct from "./controllers/products/crud/deleteProduct";
import updateProduct from "./controllers/products/crud/updateProduct";
import getProductsByName from "./controllers/products/filteredSearch/getProductsByName";
import getProductsByHighestPrice from "./controllers/products/filteredSearch/getProductsByHighestPrice";
import getProductsByLowestPrice from "./controllers/products/filteredSearch/getProductsByLowestPrice";
import verifyToken from "./middlewares/verifyToken";
import { Router } from "express";

const routes = Router();

routes.post("/user", createUser);
routes.post("/products", verifyToken, createProduct);
routes.get("/products", verifyToken, getProducts);
routes.post("/login", loginVerify);
routes.delete("/products", verifyToken, deleteProduct);
routes.put("/products/:id", verifyToken, updateProduct);
routes.get("/products/nameStartsWith/:name", verifyToken, getProductsByName);
routes.get("/products/HighestPrice", verifyToken, getProductsByHighestPrice);
routes.get("/products/LowestPrice", verifyToken, getProductsByLowestPrice);

export default routes;