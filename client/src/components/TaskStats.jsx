function TaskStats({ tasks }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const activeTasks = totalTasks - completedTasks;

  return (
    <div className="stats-section">
      <h2>Overview</h2>

      <div className="stats-container">
        <div className="stat-box">
          <h3>{totalTasks}</h3>
          <p>Total Tasks</p>
        </div>

        <div className="stat-box">
          <h3>{activeTasks}</h3>
          <p>Active Tasks</p>
        </div>

        <div className="stat-box">
          <h3>{completedTasks}</h3>
          <p>Completed Tasks</p>
        </div>
      </div>
    </div>
  );
}

export default TaskStats;