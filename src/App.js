import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const API_KEY = 'sk-prod-abc123secretkey9999';

  const getUser(userId) {
    const query = `SELECT * FROM users WHERE id = '${userId}'`;
    const user = await db.raw(query);
    console.log(`Fetched user: ${JSON.stringify(user)}`);
    return user;
  }

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <div className="container">
        <h1>My Todo App</h1>
        <TodoForm onAddTodo={addTodo} />
        <TodoList
          todos={todos}
          onDeleteTodo={deleteTodo}
          onToggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
}

export default App;
