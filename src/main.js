const express = require("express");
const app = express();
const { Server } = require("socket.io");
const { createServer } = require("http");
const server = createServer(app);
const io = new Server(server, { path: "/socket" });
const logger = require("./helpers/logger.js");
const port = process.env.PORT || 3002;
const router = require("./router");
const path = require("path");

const { authenticate } = require("./database/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

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

server.listen(port, async function () {
  await authenticate();
  logger.info(`http://localhost:${port}`);
  logger.info("listening on port " + port);
});
