const app = require(`./app`);
const { PORT } = require("./config/config");
const { checkDbConnection } = require("./config/database");
// const { deleteUnverifiedUser } = require("./middlewares/taskScheduler");

// Handle Uncaught Exception
process.on(`uncaughtException`, (error) => {
  console.log(`ERROR: ${error.stack}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

// deleting unverified User
// deleteUnverifiedUser.start();

// Database Connection
checkDbConnection();

// create server
const server = app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
  //   console.log(`Project home page: https://auth-it.onrender.com`.magenta.italic);
});

// unhandled promise rejection
process.on(`unhandledRejection`, (error) => {
  console.log(`shutting down the server for ${error.stack}`);
  console.log(`shutting down the server for unhandled promise rejection`);

  // then close the server
  server.close(() => {
    process.exit(1);
  });
});
