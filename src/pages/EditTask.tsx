import { useTaskContext } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import type { Task } from "../models/Task";

const EditTask = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { tasks, setTasks } = useTaskContext();

    const [task, setTask] = useState<Task | undefined>();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const foundTask = tasks.find((t: Task) => t.id === id);
        if( foundTask ) {
            setTask(foundTask);
            setTitle(foundTask.title);
            setDescription(foundTask.description);
        }
    }, [id, tasks]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !description) {
            setError("All fields are required");
            return;
        }

        const updatedTask: Task = {...task!, title, description};
        setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
        navigate("/");
    };

    if (!task) return <p className="p-4"> Task Not Found </p>

    return (
        <div className="container mt-4">
            <h2> Edit Task </h2>
            {error && <div className="alert alert-danger"> {error} </div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label"> Title </label>
                    <input type = "text" className="form-control" value = {title} onChange={(e) => setTitle(e.target.value)}/>
               </div>
               <div className="mb-3">
                    <label className="form-label"> Description </label>
                    <textarea className="form-control" value = {description} onChange={(e) => setDescription(e.target.value)}/>
               </div>
               <button type="submit" className="btn btn-primary"> Update Task </button>
            </form>
        </div>
    );
};

export default EditTask;