import { useEffect, useState } from 'react'
import { memo } from 'react'
import './App.css'

/*
function Header({title}) {
    return <div>
        My name is {title}
    </div>
}


function App() {
  const [title, setTitle] = useState("Sidharth");

  function updateTitle() {
    setTitle(Math.random());
  }

  return (
    <>
      <button onClick={updateTitle}>Click me to change the title</button>
      <Header title={title}></Header>
      <Header title="Sid"></Header>
    </>
  )
}

// To minimise the number of re-renders 

// 1. pushing the state down
function Header({title}) {
    return <div>
        My name is {title}
    </div>
}

function HeaderWithButton() {
  const [title, setTitle] = useState("Sidharth");
  
  function updateTitle() {
    setTitle(Math.random());
  }
  return (
    <>
      <button onClick={updateTitle}>Click me to update</button>
      <Header title={title}></Header>
    </>
  )
}
function App() {
  return (
    <>
      <HeaderWithButton></HeaderWithButton>
      <Header title="Sid"></Header>
    </>
  )
}


// 2. use React.memo
// import memo from 'react' or use like React.memo

const Header = memo(function ({title}) {
    return <div>
        My name is {title}
    </div>
})



function App() {
  const [title, setTitle] = useState("Sidharth");

  function updateTitle() {
    setTitle(Math.random());
  }

  return (
    <>
      <button onClick={updateTitle}>Click me to change the title</button>
      <Header title={title}></Header>
      <Header title="Sid"></Header>
    </>
  )
}
*/

/*
// TODO to understand the need of key

let counter = 4;

function Todo({title, description}) {
  return <div>
    <h1>Title: {title}</h1>
    <h4>Description: {description}</h4>
  </div>
}

function App() {
  const [todos, setTodo] = useState([{
    id: 1,
    title: "go to gym",
    description: "Go to gym in morning",
  }, {
    id: 2,
    title: "have tea",
    description: "have tea in evening"
  }, {
    id: 3,
    title: "sleep well",
    description: "sleep at 9"
  }]);

  function AddTodo() {
    setTodo([...todos,{
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }]
    )
  }

  return (
    <>
      <button onClick={AddTodo}>Add a new Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
    </>
  )
}

*/

/*

// useEffect
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(async(res) => {
    const json = await res.json();
    setTodos(json.todos);
  })
},[]);
*/

function App() {
  return (
  <> 
    <CardWrapper>
      hi there
    </CardWrapper>
  </>
  )
}
function TextComponent() {
  return <div>
    hi there
  </div>
}

function CardWrapper({children}) {
  // create a div which has a border(hind: the way to create a border is border:"2px solid black")
  // and inside the div, renders the prop

  return <div style={{border:"2px solid black", padding:20}}>
    {children}
  </div>

}

export default App
