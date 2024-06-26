/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * State: none
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ id, title, priority, description }) {
  return (
    <div className="Todo" id={id}>
      <div>
        <b>{title}</b> <small>(priority: {priority})</small>
      </div>
      <div>
        <small>{description}</small>
      </div>
    </div>
  );
}

export default Todo;
