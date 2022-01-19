import React, { useState } from "react";

function Todo() {
    const [ task, setTask ] = useState("");
    const [ taskList, setTaskList ] = useState([]);

    return (
        <div>
            <input
                type = "text"
                name = "text"
                id = "text"
                placeholder = "Create a Task here..."
            />
            <button className = "addBtn">Add Task</button>
        </div>
    )
}

export default Todo;