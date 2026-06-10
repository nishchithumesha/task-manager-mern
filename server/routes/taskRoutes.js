const express = require("express");
const { createTask, getTasks, updateTask, deleteTask, toggleTaskStatus } = require("../controllers/taskController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createTask);
router.put("/:id", protect, updateTask);
router.get("/", protect, getTasks);
router.delete("/:id", protect, deleteTask);
router.patch("/:id/toggle", protect, toggleTaskStatus);
module.exports = router;