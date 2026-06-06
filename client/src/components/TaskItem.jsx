function TaskItem({ task, onDelete }) {
  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmed) {
      onDelete(task.id);
    }
  };

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

      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;