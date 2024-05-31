import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoForm from "./TodoForm.jsx";
import EditableTodoList from "./EditableTodoList.jsx";
import TopTodo from "./TopTodo.jsx";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos = [] }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    let newTodoWithId = { ...newTodo, id: uuid() };
    setTodos((todos) => {
      return [...todos, newTodoWithId];
    });
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    // {id: 6, title: 'Code!', description: 'Write some code', priority: 2}
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        return todo.id === updatedTodo.id ? updatedTodo : todo;
      });
      return newTodos;
    });
  }

  /** delete a todo by id */
  function remove(id) {
    console.log("remove fn reached", id);
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <main className="TodoApp">
      <div className="row">
        {todos.length !== 0 ? (
          <div className="col-md-6">
            <h3 className="mb-3">Todos</h3>
            <EditableTodoList
              todos={todos}
              remove={remove}
              update={update}
            />{" "}
          </div>
        ) : (
          <span className="text-muted">You have no todos.</span>
        )}

        <div className="col-md-6">
          {todos.length !== 0 ? (
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} />
            </section>
          ) : (
            ""
          )}

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm submit={create} />
          </section>
        </div>
      </div>
    </main>
  );
}

export default TodoApp;
