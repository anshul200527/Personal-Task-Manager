import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete }) {
  return (
    <div>
      <h2>Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;