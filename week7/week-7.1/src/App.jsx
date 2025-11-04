/* ROUTING

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Landing } from './components/Landing'
import { Suspense, lazy } from 'react';

const Dashboard = lazy(() => import('./components/Dashboard'));
// or can import {lazy} from 'react' and use lazy() instead of React.lazy()
function App() {


  return (
    <>
    <div>
      {/* but it will cause full page reload

          <button onClick={() => {
            window.location.href='/'
          }}>Landing page</button>

          <button onClick={() => {
            window.location.href='/Dashboard' 
          }}>Dashboard</button>   
      /}

      {/* useNavigate cannot be used here because App is not inside a Router/}

    </div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          {/* Suspense API, asynchronous component fetching, asynchronous data fetching/}
          <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Appbar() {

  const navigate = useNavigate();

  return <div>
    <button onClick={() => {
      navigate('/')
    }}>Landing page</button>

    <button onClick={() => {
      navigate('/Dashboard')
    }}>Dashboard</button>
  </div>
}

export default App

*/

import {useState, useContext} from 'react'
import {countContext} from "./context"
 
function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      

      {/* But if we want to call this button inside count, 
      we might need to pass setCount props also to Count, 
      but Count is not using it, this is the case of PROP DRILLING*/}


      {/*wrap anyone that wants to use the telported value inside a provider */}

      <countContext.Provider value={{count, setCount}}>
        <Count count={count} setCount={setCount}></Count>
      </countContext.Provider>
    </>
  )
}

function Count() {
  return <div>
    <CountRender/>
    <Buttons/>
  </div>
}

function CountRender() {

  const {count} = useContext(countContext);

  return <div>
    {count}
  </div>
}

function Buttons() {
  const {count, setCount} = useContext(countContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1);
    }}>Increase the count</button>
    <button onClick={() => {
      setCount(count - 1);
    }}>Decrease the count</button>
  </div>
}

export default App