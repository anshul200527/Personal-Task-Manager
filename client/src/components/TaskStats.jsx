function TaskStats({ tasks }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const activeTasks = totalTasks - completedTasks;

  return (
    <div>
      <h2>Task Statistics</h2>

      <p>Total Tasks: {totalTasks}</p>

      <p>Active Tasks: {activeTasks}</p>

      <p>Completed Tasks: {completedTasks}</p>
    </div>
  );
}

export default TaskStats;