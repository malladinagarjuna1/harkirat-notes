

// function App(){
//   return <div>
//     <LightBulb />
//   </div>
// }
// function LightBulb(){
//   const [bulbOn, setBulbOn] = useState(true);
//   return(<div>
//     <BulbState/>
//     <ToggleBulbState  bulbOn = {bulbOn} setBulbOn={setBulbOn}/>

//   </div>);
// }

// function BulbState({bulbOn}){

//   return(<div>
//     {bulbOn ? "Bulb On": "Bulb off"}
//   </div>);

// }
// function ToggleBulbState(){
//   function toggle(){
//     setBulbOn(currentState=> !currentState)
   
//   }
//   return (<div>
//     <button>Toggle the bulb</button>
//   </div>);
// }
// export default App
// function App(){
//   return<div>
//     <LightBulb/>
//   </div>

// }

// function LightBulb(){
//   return<div>
//     <BulbState/>
//     <ToggleBulbState/>
//   </div>
// }
// function BulbState(){
//   const [bulbOn, setBulbOn] = useState(true);
//   return<div>
//     {bulbOn? "Bulb on" : "Bulb Off"}
//   </div>
// }
// function ToggleBulbState(){
//   return <div>
//     <button>
//       Toggle the bulb
//     </button>
//   </div>
// }  
// function App(){
//   return<div>
//     <LightBulb/>

//   </div>
// }
// function LightBulb(){
//   const[bulbOn, setBulbOn]= UseState(true);
//   return<div>
//     <bulbState bulbOn ={bulbOn}/>
//     <ToggleBulbState bulbOn ={bulbOn}
//     setBulbOn ={setBulbOn}/>

//   </div>
// }

// function BulbState(bulbOn){
//   return<div>
//     {bulbOn ? "Bulb on":"Bulb off"}
//   </div>
// }
// function ToggleBulbState({bulbOn, setBulbOn}){
//   function toggle(){
//     setBulbOn(!bulbOn)
//   }
//   return <div>
//     <button onClick = {toggle}>Toggle the bulb</button>

//   </div>
// }

// export default App;
//21 context api
// import { useState, createContext, useContext } from 'react'
// import './App.css'


// function App(){
//   const{bulbOn, setBulbOn}= useState(true);
//   return(<div>
//     {/* <Light /> */}
// <bulbContext.Provider>
//   <Light />
// </bulbContext.Provider>
//   </div>);
// }
// function Light(){
//   return <div>
//     <LightBulb/>
//     <LightSwitch />

//   </div>
// }
//  function LightBulb({bulbOn, a}){
  
//   return<div>
//     {bulbOn ? "Bulb on": "Bulb off"}{a}
//   </div>

//  }
//  const bulbContext = createContext();
// import { useState, createContext, useContext } from "react";
// import './App.css'
//  const bulbContext = creaateContext();
//  function BulbProvider(){

//  }

//  function App(){
//   const{buildOn, setBulbOn}= useState(true);
//   return <div>
//     <BulbProvider>
//       <Light/>

//     </BulbProvider>
//   </div>

//  }
//  function Light(){
//   return <div>

//   </div>
//  }


//Ports
