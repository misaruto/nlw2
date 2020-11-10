import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";
const routes = express.Router();

const classesController = new ClassesController();

routes.get("/classes", classesController.index);
routes.post("/classes", classesController.create);

const connectionsController = new ConnectionsController();

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);
export default routes;
