function TodoList({ todos, onToggle, onDelete }) {
	return (
    <ul className='todo-list'>
      {todos.map((e) => (
        <li key={e.id} className={e.completed ? "completed" : ""}>
          <input 
						type='checkbox'
						checked={e.completed}
						onChange={() => onToggle(e.id)}
          />
          <span>{e.text}</span>
          <button onClick={() => onDelete(e.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;