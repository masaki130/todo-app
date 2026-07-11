import { useState } from 'react';
import './App.css';
import TodoList from "./components/TodoList"

function App() {
  // 以下はtodos配列の状態(state)
  const [todos, setTodos] = useState([
    // { id: 1, text: "第三章の復習をする", completed: false },
    // { id: 2, text: "ToDoアプリを完成させる", completed: false},
  ]);

  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    const text = input.trim();
    if (!text) {
      setError("タスクを入力してください")
      return;
    }

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
    setInput("");
    setError("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
      )
    );
  };

  const deleteTode = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className='app'>
        <h1>ToDoアプリ</h1>
        
        <form className='todo-form' onSubmit={addTodo}>
          <label htmlFor='todo-input' className='form-label'>
            新しいタスク
          </label>

          <input
            id='todo-input'
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder=''
            autoComplete='off'
            className='todo-input'
          />
          <button type="submit" className='add-button'>
            追加
          </button>
          {error && <p className='error-message'>{error}</p>}
        </form>
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTode} />
      </div>
    </>
  );
}

export default App;
