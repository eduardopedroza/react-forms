import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';


function TodoList() {
  const [todos, setTodo] = useState([]);

  const deleteTodo = id => {
    setTodo(todos.filter(todo => todo.id !== id));
  }

  const renderTodos = () => {
    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Todo task={todo.task} deleteTodo={() => deleteTodo(todo.id)}/>
          </li>
        ))}
      </ul>
    )
  }

  const addTodo = todo => {
    let newTodo = { ...todo, id: uuid()};
    setTodo(todos => [...todos, newTodo]);
  }

  return (
    <div className='TodoList'>
      <NewTodoForm addTodo={addTodo}/>
      {renderTodos()}
    </div>
  )

}

export default TodoList;