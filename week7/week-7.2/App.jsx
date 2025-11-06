// STATE MANAGEMENT USING RECOIL
import {RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import {countAtom, evenSelector} from "./store/atoms/count"

function App() {
  return (
    <>
      <Count />
    </>
  )
}

function Count() {
  return <div>
    <RecoilRoot>
      <CountRender/>
      <Buttons/>
    </RecoilRoot>
  </div>
}

function CountRender() {

  const count = useRecoilValue(countAtom);
  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer/>
  </div>
}

function EvenCountRenderer() {
  // const count = useRecoilValue(countAtom);
  // const isEven = (count % 2 == 0)

  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "It is even" : null}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);

  // setCount(count + 1)
  // setCount(c => c + 1)
  // setCount(function(c) {
  //    return c + 1
  // })

  return <div>
    <button onClick={() => {
      setCount(count => count + 1);
    }}>Increase the count</button>
    <button onClick={() => {
      setCount(count => count - 1);
    }}>Decrease the count</button>
  </div>
}

export default App

