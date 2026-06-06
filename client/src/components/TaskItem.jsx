function TaskItem({ task }) {
  return (
    <div>
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        Due: {task.due_date || "No Due Date"}
      </p>

      <p>
        Status: {task.completed ? "Completed" : "Active"}
      </p>

      <button>
        Complete
      </button>

      <button>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;