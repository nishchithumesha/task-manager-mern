import React from "react";
import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/");
    return;
  }

  fetchTasks();
}, []);
  const addTask = async () => {
  try {
    await API.post("/tasks", { title, description });
    setTitle("");
    setDescription("");
    fetchTasks();
  } catch (error) {
    alert("Failed to add task");
  }
};
const deleteTask = async (id) => {
  try {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  } catch (error) {
    alert("Failed to delete task");
  }
};
const toggleTask = async (id) => {
  try {
    await API.patch(`/tasks/${id}/toggle`);
    fetchTasks();
  } catch (error) {
    alert("Failed to toggle task");
  }
};
const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/");
};

  return (
  <div className="dashboard-container">
    <div className="dashboard-card">

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      <h1>Task Manager</h1>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>
      <h2>Total Tasks: {tasks.length}</h2>

      {tasks.map((task) => (
        <div className="task-card" key={task._id}>
          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <p className="status">
            Status:
            <span
              className={
                task.status === "completed"
                  ? "completed"
                  : "pending"
              }
            >
              {" "}{task.status}
            </span>
          </p>

          <button
            className="toggle-btn"
            onClick={() => toggleTask(task._id)}
          >
            Toggle Status
          </button>

          <button
            className="delete-btn"
            onClick={() => deleteTask(task._id)}
          >
            Delete
          </button>
        </div>
      ))}

    </div>
  </div>
);
}
export default Dashboard;