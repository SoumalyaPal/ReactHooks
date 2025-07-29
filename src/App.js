import { useState } from "react";
import Blog from "./Components/Blog";
import { TotpMultiFactorGenerator } from "firebase/auth/web-extension";

function App() {
  // return (
  //   <>
  //    {/* <Blog /> */}


  //   </>
    
  // );
const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');
const [editId, setEditId] = useState(null);

const handleAddOrUpdate = () => {
  if(!input.trim()) return;
  if(editId !== null){
    setTodos(todos.map(todo => 
      todo.id === editId ? {...todo, text: input} : todo
    ));
    setEditId(null);
  } else {
    const newTodo = {
      id:Date.now(),
      text: input,
      completed: false
    };
    setTodos([...todos, newTodo]);
  }
  setInput('');
};
const handleEdit = (id) => {
  const todo = todos.find(t => t.id === id);
  setInput(todo.text);
  setEditId(id);
};
const handleDelete = (id) => {
  setTodos(todos.filter(t => t.id !== id));
};

const toggleCompleted = (id) => {
  setTodos(todos.map(todo => 
    todo.id === id ? { ...todo, completed: !todo.completed} : todo
  ));
};


return(
  <div className="app">
    <h1>TODO APP</h1>
    <div className="input-section">
      <input value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="ADD OR EDIT" 
      />
      <button onClick={handleAddOrUpdate}>
        {editId !== null ? 'Update' : 'Add'}
      </button>
    </div>
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <span>{todo.text}</span>
          <div className="actions">
            <button onClick={() => toggleCompleted(todo.id)}>
              {todo.completed ? 'Done':'Mark as Done' }
            </button>
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

}

export default App;
