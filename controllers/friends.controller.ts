import { Request, Response } from "express";

import { friends } from "../models/friends.model.js";

function getFriends(req: Request, res: Response) {
  res.json(friends);
}

function getFriend(req: Request, res: Response) {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
}

function createFriend(req: Request, res: Response) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };

  friends.push(newFriend);
  return res.json(newFriend);
}

export { getFriends, getFriend, createFriend };
