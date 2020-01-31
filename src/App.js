import React, { useState } from 'react';
import './App.css';
import Todolist from './components/Todolist';
import TodoTable from './components/TodoTable';

function App() {
  
  const[todos, setTodos] = useState([])
  console.log(todos, 'todos')
  const deleteTodos = (event) => {
    setTodos(todos.filter((todo, i) => i !== parseInt(event.target.id)))
    console.log(todos)
  }
  
  


  return (
  <div className="App">
    <header className="App-header">Todolist</header>
    <TodoTable setTodos={setTodos} todos={todos} />
    <Todolist todos={todos} deleteTodos={deleteTodos} />
    </div>
    )
}


export default App;
