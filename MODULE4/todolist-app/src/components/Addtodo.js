import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AddTodo({ addTodo }) {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("Pending");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const newTodo = {
            id: Date.now(),
            name: name,
            status: status
        };

        addTodo(newTodo);

        navigate("/");
    };

    return (
        <div>
            <h1>To-Do List App</h1>
            <h2>Add Todo</h2>

            <form className="basic-form" onSubmit={handleSubmit}>
                <label>Todo Name</label>
                <br />

                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter your todo"
                    required
                />

                <br /><br />

                <label>Todo Status</label>
                <br />

                <select
                    value={status}
                    onChange={(event) => setStatus(event.target.value)}
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <br /><br />

                <button type="submit">Add Todo</button>

                <button
                    type="button"
                    onClick={() => navigate("/")}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default AddTodo;