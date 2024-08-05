const { Server } = require(`socket.io`);
const http = require(`http`);
const express = require(`express`);
const { FRONTEND_URL } = require("../config/config");

const app = express();

const socketServer = http.createServer(app);
const io = new Server(socketServer, {
  cors: {
    origin: [FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

io.on("connection", (socket) => {
  console.log(`A user connected ${socket.id}`);

  // socket.on() is used to listen to events can be used on both server and client side
  socket.on(`disconnect`, () => {
    console.log(`A user disconnected ${socket.id}`);
  });
});

module.exports = { app, io, socketServer };
