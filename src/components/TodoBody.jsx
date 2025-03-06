import React from "react";

const TodoBody = () => {
  return (
    <div className="w-screen flex justify-center items-center my-5">
      <div className="todo-container bg-blue-200 w-1/2 rounded-2xl p-5 flex justify-center items-center">
        <div className="todo-content w-full">
            <div className="todo-top flex justify-between">
                <input type="text" placeholder="Add Todo" name="" id="" className="border-1 bg-white rounded-lg w-6/7 pl-3 h-10 mt-1"/>
                <button className="bg-blue-800 text-white px-5 rounded-lg hover:bg-blue-950 hover:scale-105 transition-all">
                    Add
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoBody;
