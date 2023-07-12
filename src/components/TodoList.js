import TodoItem from "./TodoItem";

const TodosList = ({ todosprops, handleChange, delTodo, setUpdate   }) => {
    return (
      <ul>
        {todosprops.map((todo) => (
          <TodoItem 
          key={todo.id} 
          itemprop={todo} 
          handleChange={handleChange}
          delTodo={delTodo}
          setUpdate={setUpdate}
          />
        ))}
      </ul>
    );
  };
  export default TodosList;
  