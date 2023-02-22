import { Request, Response } from "express";

function getMessages(req: Request, res: Response) {
  res.render("messages", {
    title: "Msg to the universe",
    friend: "Death",
  });
}

export { getMessages };
