import React, { useState } from "react";

export const Todolist = () => {

    const [ task, setTask ] = useState('');
    const [ todoList, setTodoList ] = useState(['tarea1', 'tarea2']);

    const handletask = (event) => {
        setTask(event.target.value);
    }
    const handRemove = (task) => {
        setTodoList(todoList.filter((item) => task !== item));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        if (task.trim() == '') {
            setTask('')
            return
        }
        setTodoList([...todoList, task])
        setTask('');
    }

    return (  
        <div className="container">

                <h1>Todos</h1>
                <form onSubmit={handleSubmit}>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Escribe una tarea."  value={task} onChange={handletask}/>
                </form>

                <ul className="list-group">
                    {todoList.map((iterator, index) => 
                    <li key={index} className="list-group-item d-flex justify-content-between hidden-icon">
                        {iterator}
                        <span onClick={() => handRemove(iterator)}>
                        <i className="fa fa-trash text-danger"></i>
                        </span>
                    </li>)}
                    <li id="Tareagris">
                        {todoList.length} tareas
                    </li>
                </ul>
        </div>

    );
};