const express = require(`express`);
const cookieParser = require(`cookie-parser`);
const cors = require(`cors`);

//  Routes imports
const authRoutes = require(`./routes/auth.routes`);
const userRoutes = require(`./routes/user.routes`);
const messageRoutes = require(`./routes/message.routes`);

const { app } = require("./socket/socket");

// MIDDLEWARES
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Middlewares
app.use(`/api/v0/auth`, authRoutes);
app.use(`/api/v0/users`, userRoutes);
app.use(`/api/v0/messages`, messageRoutes);

app.get(`/`, (req, res) => {
  res.status(200).json({ message: `welcome` });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "An unexpected error occurred.",
  });
});

module.exports = app;
