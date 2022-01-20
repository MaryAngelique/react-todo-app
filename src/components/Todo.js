import React, { useState } from "react";

function Todo() {
    const [ task, setTask ] = useState("");
    const [ taskList, setTaskList ] = useState([]);

    // Handle change
    const handleChange = (event) => {
        setTask(event.target.value);
    }

    // Handle Submit
    const handleSubmit = (event) => {
        if (task !== "") {
            const taskDetails = {
                id: Math.floor(Math.random() * 100),
                value: task,
                isCompleted: false,
            };

            setTaskList([...taskList, taskDetails]);
        }
    }

    // Completed task
    const taskCompleted = (event, id) => {
        event.preventDefault();
        setTaskList(taskList.filter)
    }

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

            {taskList !== [] ? (
                <ul>
                    {taskList.map((tsk) => (
                        <li className = {tsk.isCompleted ? "strike" : "listItem"}>
                            {tsk.value}
                            <button className = "completed">Completed</button>
                            <button className = "delete">Delete</button>
                        </li>
                        
                    ))}

                </ul>
            ): null}
        </div>
    )
}

export default Todo;