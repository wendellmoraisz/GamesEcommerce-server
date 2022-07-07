import createUser from "./controllers/createUser";
import { Router } from "express";
const routes = Router();

routes.post("/user", createUser);

export default routes;