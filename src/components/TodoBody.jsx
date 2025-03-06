import React from "react";
import { useState } from 'react'

const TodoBody = () => {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handelChange = (e) => {
        setTodo(e.target.value);
    }

    const handelAdd = () => {
        setTodos([...todos, {todo, isCompleted:false}]);
        setTodo("");
    }

  return (
    <div className="w-screen flex justify-center items-center my-5">
      <div className="todo-container bg-blue-200 w-1/3 rounded-2xl p-5 flex justify-center items-center">
        <div className="todo-content w-full">
            <div className="todo-top">
                <div className="todo-add-section flex justify-between">
                    <input type="text" placeholder="Add Todo" name="todo" onChange={handelChange} value={todo} className="border-1 bg-white rounded-lg w-4/5 pl-3 h-10 mt-1"/>
                    <button className="bg-blue-800 text-white px-5 rounded-lg hover:bg-blue-950 hover:scale-105 transition-all" onClick={handelAdd}>
                        Add
                    </button>
                </div>
                <div className="todo-all-complete mt-2">
                    <input type="checkbox" name="" id="" /> <span>All Completed Tasks</span>
                </div>
            </div>
            <div className="todo-body bg-blue-500 border-2 border-blue-950 rounded-lg mt-5 p-5 text-white">
                    {todos.map(items => {
                        return (
                        <div className="todo-body-content flex gap-5 w-full justify-between my-2 border-b-1 py-1">
                            <div className="todo-check">
                                <input type="checkbox" name="" id="" />
                            </div>
                            <div className="todo-task">
                                {items.todo}
                            </div>
                            <div className="todo-operations flex gap-3">
                                <button className="bg-blue-200 text-black px-3 h-10 text-sm  rounded-lg hover:bg-blue-950 hover:scale-105 hover:text-white transition-all">Edit</button>
                                <button className="bg-blue-200 text-black px-3 h-10 text-sm  rounded-lg hover:bg-blue-950 hover:scale-105 hover:text-white transition-all">Delete</button>
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
