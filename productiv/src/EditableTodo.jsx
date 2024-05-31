import { useState } from "react";
import Todo from "./Todo.jsx";
import TodoForm from "./TodoForm.jsx";

/** Show editable todo item.
 *
 * Props
 * - a todo item object
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * State: isEdit
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  const [isEdit, setIsEdit] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEdit((n) => !n);
  }

  /** Call remove fn passed to this. */
  function handleDelete(evt) {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update(formData);
    toggleEdit();
  }

  return (
    <div className="EditableTodo">
      {isEdit ? (
        <TodoForm todo={todo} submit={handleSave} />
      ) : (
        <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}
            >
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
          <Todo
            id={todo.id}
            title={todo.title}
            priority={todo.priority}
            description={todo.description}
          />
        </div>
      )}
    </div>
  );
}

export default EditableTodo;
