import React from 'react'

const Todo = ({taskName, comment}) => {
  return (
    <div className='main_div_todo'>
        <div className='taskName'>{taskName}</div>
        <div className='comment'>{comment}</div>
    </div>
  )
}

export default Todo