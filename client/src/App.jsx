import { useEffect, useState } from "react";
import axios from "axios";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";
import FilterBar from "./components/FilterBar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

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

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });

  return (
    <div>
      <h1>Personal Task Manager</h1>

      <TaskForm onTaskCreated={fetchTasks} />

      <TaskStats tasks={tasks} />

      <FilterBar
        filter={filter}
        setFilter={setFilter}
      />

      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleTaskStatus}
      />
    </div>
  );
}

export default App;