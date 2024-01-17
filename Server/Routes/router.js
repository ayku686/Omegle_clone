const express = require("express");
const route = express.Router();

const services = require("../Services/render");

route.get("/", services.homeRoutes);
route.get("/video_chat", services.videoChatRoutes);
route.get("/text_chat", services.textChatRoutes);

module.exports = route;