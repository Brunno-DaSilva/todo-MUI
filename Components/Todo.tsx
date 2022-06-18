import TodoForm from "./TodoForm";
const Todo = ({ addTodo }) => {
  return (
    <div className="Todo">
      <TodoForm onSubmit={addTodo} />
    </div>
  );
};

export default Todo;
