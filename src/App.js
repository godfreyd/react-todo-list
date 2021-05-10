import React, { useState, useEffect } from 'react';
import TodoList from "./Todo/TodoList";
import Context from './Context';
import AddTodo from "./Todo/AddTodo"
import { PropTypes } from 'prop-types';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(data => setTodos(data))
  }, [])

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(value) {
    setTodos([...todos, {
      id: todos.length + 1,
      completed: false,
      title: value
    }]);
  }

  return (
    <Context.Provider value={{removeTodo, toggleTodo }} >
      <div className="Wrapper">
        <h1>React Todo List</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : 'No todos!'}
      </div>
    </Context.Provider>
    
  );
}

App.propTypes = {
  toggleTodo: PropTypes.func

}
export default App;
