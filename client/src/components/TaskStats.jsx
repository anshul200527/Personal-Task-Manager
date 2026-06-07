function TaskStats({ tasks }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const activeTasks = totalTasks - completedTasks;

  return (
    <div>
      <h2>Task Statistics</h2>

      <div className="stats-container">
        <div className="stat-box">
          Total: {totalTasks}
        </div>

        <div className="stat-box">
          Active: {activeTasks}
        </div>

        <div className="stat-box">
          Completed: {completedTasks}
        </div>
      </div>
    </div>
  );
}

export default TaskStats;