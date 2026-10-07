import './App.css';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import TodoDashboard from './components/Tododashboard';
import AddTodo from './components/Addtodo';
import { useState } from 'react';

function App() {
    const [todos, setTodos] = useState([
        { id: 1, name: "Complete Assignment", status: "Pending" },
        { id: 2, name: "Study React", status: "Completed" }
    ]);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        const updated = todos.filter(todo => todo.id !== id);
        setTodos(updated);
    };

    return (
      <div>
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<TodoDashboard todos={todos} deleteTodo={deleteTodo} />} />
                <Route path="/addtodo" element={<AddTodo addTodo={addTodo} />} />
            </Routes>
        </MemoryRouter>
      </div>
    );
}

export default App;