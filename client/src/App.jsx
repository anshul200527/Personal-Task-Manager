import { useEffect, useState } from "react";
import axios from "axios";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/tasks"
      );

      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/tasks/${id}`
      );

      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const toggleTaskStatus = async (task) => {
    try {
      await axios.put(
        `http://localhost:5000/api/tasks/${task.id}`,
        {
          title: task.title,
          description: task.description,
          due_date: task.due_date,
          completed: task.completed ? 0 : 1
        }
      );

      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Personal Task Manager</h1>

      <TaskForm onTaskCreated={fetchTasks} />

      <TaskStats tasks={tasks} />

      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleTaskStatus}
      />
    </div>
  );
}

export default App;