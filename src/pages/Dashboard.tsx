import { useTaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const { tasks, setTasks } = useTaskContext();
    const navigate = useNavigate();

    const deleteTask = (id: string) => {
        setTasks(tasks.filter((tasks) => tasks.id != id));
    };

    return (
        <div className="container mt-4">
            <h2>Task Dashboard</h2>
            <button className="btn b utn-primary mb-3" onClick={() => navigate("/create")}> (+) Create Task </button>
            {tasks.length === 0 ? (
                <p> No task yet.</p>
            ) : (
                <ul className="list-group">
                    {tasks.map((task) => (
                        <li key = {task.id} className="list-group-item d-flex jsutify-content-between align-items-center">
                            <div>
                                <strong>{task.title}</strong> - {task.completed ? "(✓) Done" : "(X) Pending"}
                            </div>
                            <div>
                                <button onClick={() => navigate(`/details/${task.id}`)} className="btn btn-outline-info btn-sm me-2"> View </button>
                            </div>
                            <div>
                                <button onClick={() => navigate(`/edit/${task.id}`)} className="btn btn-outline-warning btn-sm me-2"> Edit </button>
                            </div>
                            <div>
                                <button onClick={() => deleteTask(task.id)} className="btn btn-outline-danger btn-sm"> Delete </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dashboard;