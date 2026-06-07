function TaskItem({ task, onDelete, onToggle }) {
  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmed) {
      onDelete(task.id);
    }
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        Due: {task.due_date || "No Due Date"}
      </p>

      <p
        className={
          task.completed
            ? "completed-status"
            : "active-status"
        }
      >
        Status: {task.completed ? "Completed" : "Active"}
      </p>

      <button
        onClick={() => onToggle(task)}
      >
        {task.completed
          ? "Mark Active"
          : "Complete"}
      </button>

      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;