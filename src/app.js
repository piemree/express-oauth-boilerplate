const express = require("express");
const app = express();
const { Server } = require("socket.io");
const { createServer } = require("http");
const server = createServer(app);
const io = new Server(server, { path: "/socket" });
const logger = require("./helpers/logger.js");
const port = process.env.PORT || 3002;

const router = require("./router");

io.on("connection", (socket) => {
  logger.info("A user connected " + socket.id);

  io.on("sendMessage", (client, payload) => {
    io.to(payload.roomName).emit("message", {
      message: payload.message,
      id: client.id,
    });
  });

  io.on("joinRoom", async (client, payload) => {
    const { user, room } = paylaod;
  });
});

app.use("/api", router);

server.listen(port, function () {
  logger.info(`http://localhost:${port}`);
  logger.info("listening on port " + port);
});
