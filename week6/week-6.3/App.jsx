import { useEffect, useState, useMemo, memo, useRef } from 'react'
import { memo } from 'react'


/*

//useEffect
function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  console.log("App rendered");

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100
      });

    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setExchangeData({
        returns: 40
      });

    }, 1000);
  }, []);

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;
  return (
    <>
      hi there, your income tax returns are {incomeTax}
    </>
  )
}

export default App







// useMemo & memo
function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    }, 5000)
  }, [])

  // const cryptoReturns = exchange1Data.returns + exchange2Data.returns;
  const cryptoReturns = useMemo(() => {
    console.log("hi there before");
    return exchange1Data.returns + exchange2Data.returns;
    console.log("hi there after");
  }, [exchange1Data, exchange2Data]);
  
  const incomeTax = (cryptoReturns + bankData.income) * 0.3

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
        <Dummy />
    </div>
  )
}

// memo lets u skip re-rendering a component when its props are unchanged
// const MemorizedComponent = memo(SomeComponent, arePropsEqual?)
const Dummy = memo(function() {
  return <div>
    hi
  </div>
})

*/




//useRef
function App() {
  const [incomeTax, setIncomeTax] = useState(20000);
  const divRef = useRef();
  
  useEffect(() => {
    setTimeout*=(() => {
      console.log(divRef.current);
      divRef.current.innerHTML = 10
    }, 5000);
  }, []);

  return (
    <div>
      hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}
export default App
