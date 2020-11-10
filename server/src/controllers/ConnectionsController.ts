import { Response, Request } from "express";
import db from "../database/connection";

export default class ConnectionsController {
  async index(request: Request, response: Response) {
    const [total] = await db("connections").max("id as total");

    response.json(total);
  }
  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    await db("connections").insert({
      user_id,
    });
    return response.status(201).send();
  }
}
