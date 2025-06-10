
 import {useState, usestate} from 'react'
 import './App.css'

 function useCounter(){
  const{count, setCount}= useState(0);
  function increaseCount(){
    setCount(count+1);

  }
  return {
    count: count,
    increaseCount: increaseCount+1,
  }
 }
 function App(){
  return(
    <div>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>

    </div>

  );
 }
function Counter2(){
  const{count, increaseCount} = useCounter();

  return <div>
    <button onClick = {increaseCount}>Increase {count}</button>

  </div>
}

function Counter(){
  const{count, increaseCount} = useCounter();
  return <div>
    <button onClick = {increaseCount}>Increase</button>
  </div>
}
export default App