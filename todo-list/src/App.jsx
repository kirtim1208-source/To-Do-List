import { useState } from "react";

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

        setTasks(tasks.filter((item) => item.id !== id));

    }

    function completeTask(id) {

        setTasks(tasks.map((item) => {

            if (item.id === id) {
                return {
                    ...item,
                    completed: !item.completed
                };
            }

            return item;

        }));

    }

    return (

        <div className="min-h-screen bg-indigo-100 flex justify-center p-5">

            <div className="bg-white w-full max-w-md h-fit mt-20 p-6 rounded-lg shadow-md">

                <h1 className="text-2xl font-bold text-center mb-5">
                    My To Do List
                </h1>

                <div className="flex gap-2">

                    <input
                        type="text"
                        placeholder="Enter your task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md w-full outline-none"
                    />

                    <button
                        onClick={addTask}
                        className="bg-indigo-500 text-white px-4 rounded-md hover:bg-indigo-600"
                    >
                        Add
                    </button>

                </div>

                <ul className="mt-5">

                    {tasks.map((item) => (

                        <li
                            key={item.id}
                            className="flex justify-between items-center gap-2 bg-gray-100 p-3 mb-2 rounded-md"
                        >

                            <span
                                onClick={() => completeTask(item.id)}
                                className={item.completed ? "line-through text-gray-400 cursor-pointer" : "cursor-pointer"}
                            >
                                {item.name}
                            </span>

                            <button
                                onClick={() => deleteTask(item.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                            >
                                Delete
                            </button>

                        </li>

                    ))}

                </ul>

            </div>

        </div>

    );

}

export default App;
