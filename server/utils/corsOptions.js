const { FRONTEND_URL } = require("../config/config");

exports.corsOptions = {
  origin: [FRONTEND_URL],
  methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
  credentials: true,
};
