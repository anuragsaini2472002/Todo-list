import React, {useState} from 'react'
import { addTodoCard } from '../utils/HandleApi';

const Modal = () => {
  const [taskName, setTaskName] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div className='main_modal'>
    <input type="text" className='text' placeholder='add task name' value={taskName} onChange={(e)=> setTaskName(e.target.value)} name="comment"/>
    <input type="text" className='text' placeholder='add comment' value={comment} onChange={(e)=> setComment(e.target.value)} name="taskName"/>
    <button onClick={()=> addTodoCard(taskName, setTaskName, comment, setComment)}>Submit</button>
    </div>)
}

export default Modal