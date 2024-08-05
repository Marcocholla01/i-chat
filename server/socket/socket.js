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

const getReciverSocketId = (reciverId) => {
  return userSocketMap[reciverId];
};

const userSocketMap = {}; // {usrId: socketId}

io.on("connection", (socket) => {
  console.log(`A user connected ${socket.id}`);

  const userId = socket.handshake.query.userId;
  if (userId !== "undefined") userSocketMap[userId] = socket.id;

  // io.emit() used to send events to all connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // socket.on() is used to listen to events can be used on both server and client side
  socket.on(`disconnect`, () => {
    console.log(`A user disconnected ${socket.id}`);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

module.exports = { app, io, socketServer, getReciverSocketId };
