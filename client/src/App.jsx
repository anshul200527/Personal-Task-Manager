import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";

const API_URL =
  "https://personal-task-manager-api-xdwc.onrender.com/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const toggleTaskStatus = async (task) => {
    try {
      await axios.put(`${API_URL}/${task.id}`, {
        title: task.title,
        description: task.description,
        due_date: task.due_date,
        completed: task.completed ? 0 : 1
      });

      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <div className="header">
        <h1>Personal Task Manager</h1>
        <p className="subtitle">
          Organize and track your daily tasks
        </p>
      </div>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

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