import { use, useState } from 'react';
import './App.css'


/*
// Basic counter functionality
function App() {

  const [count, setCount] = useState(0)

  function onClickHandler() {
    setCount(count + 1); 
  }
  return (
    <div>
      <button onClick={onClickHandler}>Counter {count}</button>
    </div>
  )
}
*/

/*
// Using props to pass data and functions to child components
function App() {
  
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount} />
      
    </div>
  )
}

//component
function CustomButton(props) {

  function onClickHandler() {
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

*/

function App() {
  
  const [todos, setTodos] = useState([{
    title: "Go to Gym",
    description: "Go to gym at 6am",
    completed: false
  },{
    title: "Learn React",
    description: "Learn React at 8am",
    completed: true
  },{
    title: "Learn React",
    description: "Learn React at 8am",
    completed: true
  }]); 

  function addTodo() {
    setTodos([...todos, {
      title: "New Todo " + Math.floor(Math.random() * 100),
      description: "This is a new todo",
      completed: false
    }])
  }

  return (
  
   <div>
    <button onClick={addTodo}>Add a random todo</button>
    {/*JSON.stringify(todos) */}
    {/*<Todo title={todos[0].title} description={todos[0].description} />*/}

    {todos.map(function(todo) {
      return <Todo title={todo.title} description={todo.description} />
    })}
    <Todo title="New Todo" description="This is a new todo" />
   </div>
  )
}

//component
function Todo(props) {

  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}


export default App
