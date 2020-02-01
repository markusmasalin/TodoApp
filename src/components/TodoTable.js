import React, {useState} from 'react'


const TodoTable = (props) => {
    const[todo, setTodo] = useState({desc: '', date: ''})

    const inputChanged = ( event) => {
        console.log(event.target, 'event target')
        setTodo({...todo, [event.target.name]: event.target.value})
        console.log(todo, 'desc')
     } 

     const addTodo = (event) => {
        event.preventDefault();
    
        props.setTodos([...props.todos, todo])
        console.log(props.todos, 'todos')
        setTodo({desc: '', date: ''})
      }

    return (
      <div>
        <h1>Add new Todo</h1>
        <form onSubmit={addTodo}>
        <label>Description: 
          <input type="text" onChange={inputChanged} name="desc" value={todo.desc} />
        </label>
        <label>Date:  
        <input type="date" onChange={inputChanged} name="date" value={todo.date}/>
        </label>
        <input type="submit" value="Add"/>
      </form>
      </div>
    )
}

export default TodoTable;