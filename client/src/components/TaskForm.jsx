import { useState } from "react";
import axios from "axios";

const API_URL =
  "https://personal-task-manager-api-xdwc.onrender.com/api/tasks";

function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(API_URL, {
        title,
        description,
        due_date: dueDate
      });

      console.log("Task Created:", response.data);

      onTaskCreated();

      setTitle("");
      setDescription("");
      setDueDate("");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="task-form"
    >
      <h2>Add New Task</h2>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(event) =>
          setDescription(event.target.value)
        }
      />

      <input
        type="date"
        value={dueDate}
        onChange={(event) =>
          setDueDate(event.target.value)
        }
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;