import TodoItem from './TodoItem';

const TodosList = ({ todosprops, handleChange, delTodo, setUpdate }) => {
    return (
      <div>
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
      </div>
    );
  };
  
  export default TodosList;
  