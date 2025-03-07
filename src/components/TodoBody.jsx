import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const TodoBody = () => {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [showFinished, setShowFinished] = useState(true);

    useEffect(() => {
        let todoString = localStorage.getItem("todos");
        if(todoString){
            let todos = JSON.parse(localStorage.getItem("todos"));
            setTodos(todos);
        }
    }, [])

    // useEffect(() => {
    //     console.log("Updated todos:", todos); // Debugging log
    //     localStorage.setItem("todos", JSON.stringify(todos));
    // }, [todos]);  // Runs every time `todos` updates
    
    

    const saveToLocalStorage = (params) => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    // useEffect(() => {
    //     localStorage.setItem("todos", JSON.stringify(todos));
    // }, [todos]); // This runs every time `todos` is updated
    

    const handelChange = (e) => {
        setTodo(e.target.value);
    }

    const handelAdd = () => {
        // setTodos([...todos, {id: uuidv4(), todo, isCompleted:false}]);
        // setTodo("");
        // saveToLocalStorage();
        const newTodo = {id: uuidv4(), todo, isCompleted:false}
        setTodo("");
        const oldTodo = todos
        oldTodo.push(newTodo);
        setTodos(oldTodo);
        localStorage.setItem("todos", JSON.stringify(oldTodo));
    }

    const handelCheckBox = (e) => {
        let id = e.target.name;
        let index = todos.findIndex(item=>{
            return item.id === id;
        });
        let newTodos = [...todos];
        // let newTodos = todos;
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
        saveToLocalStorage();
    }

    const handelDelete = (e, id) => {
        let newTodos = todos.filter(item => {
            return item.id !== id;
        });
        setTodos(newTodos);
        // saveToLocalStorage();
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }

    const handelEdit = (e, id) => {
        let editTodo = todos.filter(item => {
            return item.id === id;
        });
        setTodo(editTodo[0].todo);
        let newTodos = todos.filter(item => {
            return item.id !== id;
        });
        setTodos(newTodos);
        saveToLocalStorage();
    }

    const toggleFinished = () => {
        setShowFinished(!showFinished)
    }

  return (
    <div className="w-screen flex justify-center items-center my-5">
      <div className="todo-container bg-blue-200 border-2 border-blue-950 w-1/3 rounded-2xl p-5 flex justify-center items-center">
        <div className="todo-content w-full">
            <div className="todo-top">
                <div className="todo-add-section flex justify-between">
                    <input type="text" placeholder="Add Todo" name="todo" onChange={handelChange} value={todo} className="border-1 bg-white rounded-lg w-4/5 pl-3 h-10 mt-1"/>
                    <button className="bg-blue-800 text-white px-5 rounded-lg hover:bg-blue-950 hover:scale-105 transition-all disabled:bg-blue-400 disabled:hover:scale-100" disabled={todo.length<=3} onClick={handelAdd}>
                        Add
                    </button>
                </div>
                <div className="todo-all-complete mt-2">
                    <input type="checkbox" onChange={toggleFinished} checked={showFinished} /> <span>All Completed Tasks</span>
                </div>
            </div>
            <div className="todo-body bg-blue-300 border-2 border-blue-950 rounded-lg mt-5 p-5 text-blue-950 font-semibold">
                {todos.length == 0 && <div className="text-center">No Todos Added!</div> }
                    {todos.map(items => {
                        return (!items.isCompleted || showFinished) && (
                        <div key={items.id} className="todo-body-content flex gap-5 w-full justify-between my-2 border-b-1 py-1">
                            <div className="todo-check">
                                <input type="checkbox" className="border-blue-950 bg-blue-950" name={items.id} onChange={handelCheckBox} checked={items.isCompleted}/>
                            </div>
                            <div className={`${items.isCompleted?"line-through":""} todo-task`}>
                                {items.todo}
                            </div>
                            <div className="todo-operations flex gap-3">
                                <button onClick={(e) => {handelEdit(e, items.id)}} className="bg-blue-200 text-blue-950 px-3 h-10 text-lg  rounded-lg hover:bg-blue-950 hover:scale-105 hover:text-white transition-all"><FaEdit /></button>
                                <button onClick={(e) => {handelDelete(e, items.id)}} className="bg-blue-200 text-blue-950 px-3 h-10 text-2xl  rounded-lg hover:bg-blue-950 hover:scale-105 hover:text-white transition-all"><MdDeleteForever /></button>
                            </div>
                        </div>
                    )})}

            </div>
        </div>
      </div>
    </div>
  );
};

export default TodoBody;