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

module.exports = {
  createTask,
  getAllTasks
};