import { useEffect, useState } from "react";

import NewTodoForm from "./NewTodoForm";
import "./style.css";
import TodoList from "./TodoList";

const App = () => {
  
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])
  

  const addTodo= (title) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(
      currentTodos => currentTodos.filter(todo => todo.id !== id)
    )
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo}/>
      <h1 className="header">Todo List</h1>
      {todos.length === 0 && "[No Todos]  "}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
};

export default App;
