import EditableTodo from "./EditableTodo.jsx";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * State: none
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, remove, update }) {
  function renderTodos() {
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {" "}
            <EditableTodo todo={todo} update={update} remove={remove} />
          </li>
        ))}
      </ul>
    );
  }
  return <div>{renderTodos()}</div>;
}

export default EditableTodoList;
