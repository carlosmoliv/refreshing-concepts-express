import express from "express";
import friendsRouter from "./routes/friends.router.js";
import messagesRouter from "./routes/messages.router.js";

import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 4000;
const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;

  console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});

app.get("/", (req, res) => {
  res.render("index", {
    title: "Fuck this",
    caption: "Lets got suicide",
  });
});

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.listen(4000, () => {
  console.log(`Listening on port ${PORT}`);
});
