import React, { useState, useEffect } from "react"; 
import useConsoleLog from "./useConsoleLog";  // CUSTOM HOOK

function App() { 
  const [count, setCount] = useState(0); 
  const [factory, setFactory] = useState(0);

  useConsoleLog(count);
 
  // Increment the counter by 1 every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + (1*factory));
    }, 150);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }); // No array = GOGOGO - Empty array ensures this effect runs only once

  function increment() { 
    setCount(prevCount => prevCount + 1); 
  } 

  function buy() {
    if (count >= 100) {
      setCount(prevCount => prevCount - 100);
      setFactory(prevFactory => prevFactory + 1);
    }
  }

  function buy10() {
    if (count >= 1000) {
      setCount(prevCount => prevCount - 1000);
      setFactory(prevFactory => prevFactory + 10);
    }
  }

  function buy100() {
    if (count >= 10000) {
      setCount(prevCount => prevCount - 10000);
      setFactory(prevFactory => prevFactory + 100);
    }
  }

  return ( 
    <div> 
      <h1>Cookies: {count}</h1> 
      <button onClick={increment}>Make cookie</button> 
      <h1>Factories: {factory}</h1>
      <button onClick={buy}>Buy factory (100 cookies)</button> 
      <button onClick={buy10}>Buy 10 factories (1000 cookies)</button> 
      <button onClick={buy100}>Buy 100 factories (10000 cookies)</button>
    </div> 
  ); 
} 

export default App;