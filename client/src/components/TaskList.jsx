function TaskList({ tasks }) {
  return (
    <div>
      <h2>Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.due_date}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;