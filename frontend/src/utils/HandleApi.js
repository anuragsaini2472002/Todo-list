import axios from 'axios';

const baseUrl = "http://localhost:5000/"

const getAllTodo = (setTodo) => {
    axios.get(`${baseUrl}getAllTodoCards`).then(({data}) => {
        console.log(`Data: ${JSON.stringify(data)}`);
        setTodo(data);
    });
}

const addTodoCard = (taskName, setTaskName, comment, setComment, setTodo) => {
    axios.post(`${baseUrl}addTodoCard`, {taskName, comment}).then((data)=>{
        console.log(`Successfully added: ${JSON.stringify(data)}`);
        setTaskName("");
        setComment("");
        getAllTodo(setTodo);
    }).catch((e)=> console.log(`Error while add Todo: ${e}`))
}

export {getAllTodo, addTodoCard}