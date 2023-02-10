import {useState, useEffect} from 'react';
import Todo from './component/Todo';
import './App.css';
import { getAllTodo } from './utils/HandleApi';
import Modal from './component/Modal';

function App() {
  const [todo, setTodo] = useState([]);
  const [modal, setModal] = useState(false);  
  
useEffect(()=>{
  getAllTodo(setTodo)
},[])

  return ( 
   <div className='main_div_app'>
   <div className='add_button' onClick={()=> setModal(true)}>Add Todo Card</div>
   {
    modal && <Modal/> 
   }
   <div className='get_todo_div'>
   {
    todo.map((i) => <Todo key={i._id} taskName={i.taskName} comment={i.comment}/>)
   }
   </div>
   </div>
  );
}

export default App;
