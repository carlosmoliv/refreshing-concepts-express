import express from "express";
import { getMessages } from "../controllers/messages.controller";

const messagesRouter = express.Router();
messagesRouter.get("/", getMessages);

export default messagesRouter;
