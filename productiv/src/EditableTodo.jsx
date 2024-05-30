import { useState } from "react";
import Todo from "./Todo.jsx";
import TodoForm from "./TodoForm.jsx";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEdit(true);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update(formData);
  }

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="EditableTodo">
      {isEdit ? (
        <TodoForm handleSave={handleSave} />
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
