import React from 'react';

function Todo({ task, deleteTodo }) {
  return (
    <div>
      {task}
      <button onClick={deleteTodo}>Delete</button>
    </div>
  )
}

export default Todo;