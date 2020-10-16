import React from 'react';

function Form({setInputText, todos, setTodos, inputText}) {
    //Here I will write JS code and function
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id:Math.random()*1000 }, 
        ])
    }
    return(
        <form>
        <input onClick= {inputTextHandler} type="text" className="todo-input"/>
        <button onClick={submitTodoHandler} className= "todo-button" type="submit">
            <i className = "fas fa-plus-square"></i>
        </button>
        </form>
    ); 
};

export default Form;