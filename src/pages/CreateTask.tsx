import { useTaskContext } from "../context/TaskContext";
import { useState } from "react";
import { Task } from "../models/Task";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
    const { tasks, setTasks } = useTaskContext();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        if(!title || !description) {
            setError("All fields are required!");
            return;
        }

        const newTask: Task = {
            id: uuidv4(), title, description, completed: false,
        };

        setTasks([...tasks, newTask]);
        navigate("/");
    };

    return (
        <div className="container mt=4">
            <h2> Create New Task </h2>
            {error && <div className="aler alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label"> Title </label>
                    <input type = "text" className = "form-control" value = {title} onChange = {(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label className="form-label"> Description </label>
                    <textarea className="form-control" value = {description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-success"> Add Task </button>
            </form>
        </div>
    );
};

export default CreateTask;