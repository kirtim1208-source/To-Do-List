
import { useState } from "react";
import "./index.css";

function App() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    // Add Task
    function addTask() {

        if (task.trim() === "") {
            return;
        }

        const newTask = {
            id: Date.now(),
            name: task,
            completed: false
        };

        setTasks([...tasks, newTask]);
        setTask("");
    }

    // Delete Task
    function deleteTask(id) {

        const newTasks = tasks.filter(
            (item) => item.id !== id
        );

        setTasks(newTasks);
    }

    // Complete Task
    function completeTask(id) {

        const newTasks = tasks.map((item) => {

            if (item.id === id) {
                return {
                    ...item,
                    completed: !item.completed
                };
            }

            return item;
        });

        setTasks(newTasks);
    }

    return (
        <div className="container">

            <h1>My To Do List</h1>

            <div className="input-box">

                <input
                    type="text"
                    placeholder="Enter your task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <button onClick={addTask}>
                    Add
                </button>

            </div>

            <ul>

                {tasks.map((item) => (

                    <li key={item.id}>

                        <span
                            className={item.completed ? "completed" : ""}
                            onClick={() => completeTask(item.id)}
                        >
                            {item.name}
                        </span>

                        <button
                            className="delete-btn"
                            onClick={() => deleteTask(item.id)}
                        >
                            Delete
                        </button>

                    </li>

                ))}

            </ul>

        </div>
    );
}

export default App;
