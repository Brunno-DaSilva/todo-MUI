import React, { useState } from "react";

import Todo from "./Todo";

const TodoList = () => {
  const [todoItem, setTodoItem] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodoItem = [todo, ...todoItem];
    setTodoItem(newTodoItem);
  };
  return (
    <div className="TodoList">
      <Todo onSubmit={addTodo} />
    </div>
  );
};
export default TodoList;
