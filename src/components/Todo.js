import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, removeTodo } from '../actions/index'
import "./Todo.css"

function Todo() {
  const [frist_name, set_frist_name] = useState('')
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <div>
      <div className='main-div'>
        <div className='child-div'>
          <figure>
            <figcaption> <h1>Add your list here</h1></figcaption>
          </figure>

          <div className='add_item col-md-4'>
            <input  type='text' placeholder='write' value={frist_name} onChange={(event) => {set_frist_name(event.target.value)}}/>
            <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(frist_name),set_frist_name(''))}></i>
          </div>
          <br/>
          <div className='container w-50 justify-content-center align-items-center'>
            <div className='row '>
            <table className='table '>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>            
              <tbody>
                {list.map((elem) => {
                  return (
                    <tr className='eachitem' key={elem.id}>
                      <td><h3>{elem.data}</h3></td>
                      <td>
                        {/* <div className='todo-btn'> */}
                          <i className='fa fa-trash-alt add-btn' title="Delete Item" onClick={() => dispatch(deleteTodo(elem.id))}></i>                     
                        {/* </div> */}
                      </td>
                    </tr>
                  )
                  })              
                }
              </tbody>
            </table>
            </div>
          </div>
          <br/>
          <div className='removebtn'>
            <button className='btn btn-primary' onClick={() => dispatch(removeTodo())}><span>Remove All</span></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
