import { useParams, useNavigate } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";

const TaskDetails = () => {
    const { id } = useParams();
    const { tasks } = useTaskContext();
    const navigate = useNavigate();

    const task = tasks.find((t) => t.id === id);

    if(!task) return <p className="p-4"> Task not found. </p>

    return (
        <div className="container mt-4">
            <h2> Task Details </h2>
            <p><strong>Title:</strong> {task.title}</p>
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Status:</strong> {task.completed ? "(✓) Done" : "(X) Pending"}</p>
            <button className="btn btn-warning me-2" onClick={() => navigate(`/edit/${task.id}`)}> Edit </button>
            <button className="btn btn-secondary" onClick={() => navigate("/")}> Back to Dashboard</button>
        </div>
    );
};

export default TaskDetails;