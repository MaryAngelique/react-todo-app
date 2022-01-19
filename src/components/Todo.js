import React, { useState } from "react";

function Todo() {
    const [ task, setTask ] = useState("");
    const [ taskList, setTaskList ] = useState([]);

    // Handle change
    const handleChange = (event) => {
        setTask(event.target.value);
    }

    const handleSubmit = (event) => {
        if (task !== "") {
            const taskDetails = {
                id: Math.floor(Math.random() * 100),
                value: task,
                isCompleted: false,
            };

            setTaskList([...taskList, taskDetails]);
        }
    };


    return (
        <div>
            <input
                type = "text"
                name = "text"
                id = "text"
                placeholder = "Create a Task here..."
                onChange = { (event) => handleChange }
            />
            <button className = "addBtn" onClick = {handleSubmit}>Add Task</button>
        </div>
    )
}

export default Todo;