import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Todolist from './components/Todolist';
import TodoTable from './components/TodoTable';
import Contact from './components/Contact';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";

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
    <BrowserRouter>
      <div>
      
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
    
        <button className="navbar-toggler" type="button"
          data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <Link className="navbar-brand" to ="/" >My Todo list</Link>
          <div className="collapse navbar-collapse" id ="navbarSupportedContent">
            <ul className="nav justify-content-center">
              <li className="nav -item active"> 
                <Link className="nav-link" to="/">Home</Link>{' '}
              </li>
              <li className="nav -item">
                <Link className="nav-link"to="/todos">Todos</Link>{' '}
              </li>
              <li className="nav -item">
                <Link className="nav-link"to="/addTodos">Add new Todo</Link>{' '}
              </li>
            </ul >
          </div>
      </nav>
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/todos" render={() => <Todolist todos={todos} deleteTodos={deleteTodos} />}/>
          <Route path="/addTodos" render={() => <TodoTable setTodos={setTodos} todos={todos} />}/>
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
   
    
    
    </div>
    )
}


export default App;
