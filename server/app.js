const express = require("express");
const cors = require("cors");
require("./database/db");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Task Manager API Running"
  });
});

module.exports = app;