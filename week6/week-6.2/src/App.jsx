import { useState, useEffect, useMemo, useCallback } from 'react'
import axios from 'axios'
import './App.css'
import { memo } from "react";
/*
function App() {
  const [todos, setTodos] = useState([]);
  

  useEffect(() => {
    axios.get("https://shrimo.com/fake-api/todos")
    .then((res) => {
      setTodos(res.data);
    })

  },[]);

  return (
    <>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} key={todo._id}></Todo>)}
    </>
  )
}

function Todo({title, description}) {
  return <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}

*/
/*
function App() {
  const [selectedId, setSelectedId] = useState(1);

  function handleClick(id) {
    setSelectedId(id);
  }

  return <div>
    <button onClick={handleClick}>1</button>
    <button onClick={handleClick}>2</button>
    <button onClick={handleClick}>3</button>
    <button onClick={handleClick}>4</button>
    <Todo id={selectedId}/>
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  // implement effect here
  useEffect(() => {
    axios.get('https://shrimo.com/fake-api/todos/' + id)
    .then((res) => {
      setTodo(res.data)
    })
  }, [id]);

  return <div>
    <h1>{todo.title}</h1>
    <h3>{todo.description}</h3>
  </div>
}
*/
/*

function App() {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);
  
  return (
    <>
      <input type="number" onChange={(e) => {
        const num = e.target.value;
        let val = 0;
        for(let i = 1; i <= num; i++) {
          val += i;
        }
        setSum(val);
      }}></input>
      <br></br>
      Sum is : {sum}
      <br></br>
      <button onClick={() => setCount(count + 1)}>Counter: {count}</button>
    </>
  )
}
*/




/*
// useMemo
function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  
  let count = useMemo(() => {
    let count = 0;
    for(let i = 0; i <= inputValue; i++) {
      count += i;
    }
    return count;
  }, [inputValue]);

  return (
    <>
      <input type="number" onChange={function(e) {
        setInputValue(e.target.value);
      }} placeholder={"Find sum from 1 to n"}></input>
      <br></br>
      Sum from 1 to {inputValue} is {count}
      <br></br>

      <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
    </>
  )
}

*/



//useCallback

function App() {
  const [count, setCount] = useState(0)
  
  // it will be recreated on every render because react is not smart enough to know 
  // it is same as for the last render

  // function inputFunction() {
  //   console.log("hi there");
  // }

  // make inputfunction a variable which is wrapped inside useCallback
  const inputFunction = useCallback(() => {
    console.log("Hi there");
  }, [])

  return <div>
    <ButtonComponent inputFunction = {inputFunction}></ButtonComponent>
    
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me</button>

  </div>
}

const ButtonComponent = memo(({inputFunction}) => {
  console.log("child render")

    return <div>
      <button>Button Clicked</button>
    </div>
  
})

export default App
