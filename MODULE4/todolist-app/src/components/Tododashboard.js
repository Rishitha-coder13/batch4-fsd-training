import { useNavigate } from 'react-router-dom';

function TodoDashboard({ todos, deleteTodo }) {
    const navigate = useNavigate();

    const showAddTodo = () => {
        navigate("/addtodo");
    };

    return (
        <div>
            <h1>To-Do List App</h1>
            <h2>My To-Do Tasks</h2>

            <table>
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.name}</td>
                            <td>{todo.status}</td>
                            <td>
                                <button
                                    onClick={() => deleteTodo(todo.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button
                className="my-button"
                onClick={showAddTodo}
            >
                Add Todo
            </button>
        </div>
    );
}

export default TodoDashboard;