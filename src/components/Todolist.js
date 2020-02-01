import React from 'react'
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

const Todolist = (props) => {

const columns = [{
  Header: 'Date',
  accessor: 'date' //  String-basedvalueaccessors!
}, {
  Header:'Description',
  accessor: 'desc',
},
{
  Cell: ({index}) => <button id={index} onClick={props.deleteTodos} >Delete</button>
}]


if(props === undefined){
  return(
    <div>
      <p>Loading</p>
    </div>
  )
}

return (
    <div>
      <div className="App">
        <h1>Your Todos</h1>
        <ReactTable data={props.todos}    
          columns={columns} />
      </div>
       
    </div>
)

}
export default Todolist;