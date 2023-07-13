import { useState } from 'react';
import './todoItem.css';

const TodoItem = ({ itemprop, handleChange, delTodo, setUpdate  }) => {
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(itemprop.title);

  const handleEditing = () => {
      setEditing(true);
    };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
        setUpdate(updateInput, itemprop.id);
      setEditing(false);
    }
  };

    return
    <>
      <li className="item">
      <div className="content" style={viewMode}>
      <input type="checkbox" 
        checked={itemprop.completed}
        onChange={() => handleChange(itemprop.id)}
        />
        <button onClick={handleEditing}>Edit</button>
        <button onClick={() => delTodo(itemprop.id)}>Delete</button>

        {itemprop.title}
        </div>
        <input
      type="text"
      value={updateInput}
      className="textInput"
      style={editMode}
      onChange={(e) => setUpdateInput(e.target.value)}
      onKeyDown={handleUpdatedDone}
     />
        </li>;
    </>
  };
  
  export default TodoItem;
  