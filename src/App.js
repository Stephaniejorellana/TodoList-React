import React, {useState} from 'react';
import './App.css';

//importing components
import Form from './Components/Forms';
import TodoList from './Components/TodoList';

function App() {
  const [inputText, setInputText] = useState(""); 
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
    <header>To-Do List</header>
    <Form inputText = {inputText} todos= {todos} setTodos = {setTodos} setInputText = {setInputText} />
    <TodoList />
    </div>
  );
}

export default App;
