const express = require("express");
const router = express.Router();

const {
  createTask,
  getAllTasks,
  updateTask
} = require("../controllers/taskController");

router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", updateTask);

module.exports = router;