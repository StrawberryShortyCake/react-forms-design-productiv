import EditableTodo from "./EditableTodo.jsx";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, remove, update }) {
  return (
    <div>
      {/*   FIXME  */}
      <EditableTodo todo={todos[0]} remove={remove} update={update} />
      <EditableTodo todo={todos[1]} remove={remove} update={update} />
      <EditableTodo todo={todos[2]} remove={remove} update={update} />
    </div>
  );
}

export default EditableTodoList;
