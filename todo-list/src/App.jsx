
import { useState } from "react";
import "./App.css";

function App() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

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

    function deleteTask(id) {

        const newTasks = tasks.filter((item) => item.id !== id);

        setTasks(newTasks);
    }

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

                        <div className="buttons">

                            <button onClick={() => completeTask(item.id)}>
                                {item.completed ? "Undo" : "Done"}
                            </button>

                            <button
                                className="delete-btn"
                                onClick={() => deleteTask(item.id)}
                            >
                                Delete
                            </button>

                        </div>

                    </li>

                ))}
            </ul>

        </div>
    );
}

export default App;
