import express, { Request, Response } from "express";

import {
  getFriends,
  createFriend,
  getFriend,
} from "../controllers/friends.controller";

const friendsRouter = express.Router();

friendsRouter.use((req: Request, res: Response, next) => {
  console.log(req.ip);
  next();
});

friendsRouter.post("/", createFriend);
friendsRouter.get("/", getFriends);
friendsRouter.get("/:friendId", getFriend);

export default friendsRouter;
