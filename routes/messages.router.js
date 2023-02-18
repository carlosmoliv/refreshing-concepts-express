import express from "express";

import { getMessages } from "../controllers/messages.controller.js";

const messagesRouter = express.Router();

messagesRouter.get("/", getMessages);

export default messagesRouter;
