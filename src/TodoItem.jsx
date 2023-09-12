
const TodoItem = ({ id, title, completed, toggleTodo, deleteTodo }) => {
  return (
    <li>
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            {title}
          </label>
          <button
            className="btn-danger btn"
            onClick={() => deleteTodo(id)}
          >
            Delete
          </button>
        </li>
  )
}

export default TodoItem