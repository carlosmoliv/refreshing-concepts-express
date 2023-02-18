import express from "express";

import {
  getFriends,
  createFriend,
  getFriend,
} from "../controllers/friends.controller.js";

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log(req.ip);
  next();
});

friendsRouter.post("/", createFriend);
friendsRouter.get("/", getFriends);
friendsRouter.get("/:friendId", getFriend);

export default friendsRouter;
