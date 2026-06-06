const db = require("../database/db");

const createTask = (req, res) => {
  const { title, description, due_date } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      error: "Title is required"
    });
  }

  const sql = `
    INSERT INTO tasks (title, description, due_date)
    VALUES (?, ?, ?)
  `;

  db.run(sql, [title, description, due_date], function (err) {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    }

    res.status(201).json({
      id: this.lastID,
      title,
      description,
      due_date,
      completed: 0
    });
  });
};

const getAllTasks = (req, res) => {
  const sql = `
    SELECT * FROM tasks
    ORDER BY created_at DESC
  `;

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    }

    res.status(200).json(rows);
  });
};
const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, due_date, completed } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      error: "Title is required"
    });
  }

  const sql = `
    UPDATE tasks
    SET title = ?, description = ?, due_date = ?, completed = ?
    WHERE id = ?
  `;

  db.run(
    sql,
    [title, description, due_date, completed, id],
    function (err) {
      if (err) {
        return res.status(500).json({
          error: err.message
        });
      }

      if (this.changes === 0) {
        return res.status(404).json({
          error: "Task not found"
        });
      }

      res.status(200).json({
        message: "Task updated successfully"
      });
    }
  );
};
module.exports = {
  createTask,
  getAllTasks,
  updateTask
};