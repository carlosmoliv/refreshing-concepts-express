import express, { NextFunction, Request, Response } from "express";
import * as path from "path";

import friendsRouter from "./routes/friends.router";
import messagesRouter from "./routes/messages.router";

const PORT = 4000;
const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();

  next();

  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});

app.get("/", (req, res) => {
  res.render("index", {
    title: "Changing to typescript",
    caption: "Whatever",
  });
});

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.listen(4000, () => {
  console.log(`Listening on port ${PORT}`);
});
