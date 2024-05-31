import Todo from "./Todo.jsx";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }) {
  // lowest-priority # is the highest priority
  let top = todos.reduce(
    (acc, cur) => (cur.priority < acc.priority ? cur : acc),
    todos[0]
  );

  return (
    <div>
      <Todo
        id={top.id}
        title={top.title}
        priority={top.priority}
        description={top.description}
      />
    </div>
  );
}

export default TopTodo;
