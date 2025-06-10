
import './App.css'
import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet, useRef} from "react-router-dom";

// function App() {

//  return <div style={{ paddingLeft:10, paddingBottom: 1000, background: "white", width:2000}}> 
 
// <BrowserRouter>
//   {/* it causes full loading */}
//   {/* <a href ="/">Allen|</a>
//   <a href ="/neet/online-coaching-class-11">Class 11|</a> 
//   <a href ="/neet/online-coaching-class-12">class 12</a> */}
//   {/*link causes only half-loading*/}
//   <Link to ="/"><button style={{background:"blue"}}>Allen</button>  </Link>
//   <Link to ="/neet/Online-coaching-class-11"><button style={{background:"blue"}}>Class 11</button>  </Link>
//   <Link to ="/neet/Online-coaching-class-12"><button style={{background:"blue"}}>Class 12</button></Link>
  
//   <Routes>
//     <Route path ="/neet/online-coaching-class-11" element={<Class11Program/>}/>
//     <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}/>
//     <Route path ="/" element ={<Landing/>}/>
//     <Route path="*" element ={<ErrorPage/>}/>
    
//       </Routes>
//       <p style ={{color: "black"}}>Footer| Contact Us</p></BrowserRouter>
      
//  </div>
//  {/* */}
 
// }

// function ErrorPage(){
//   return <div>
//     <p style={{color:"black"}}>    Sorry your dick is low</p>

//   </div>
// }
// function Landing(){
//   return <div style={{display:"flex", flexDirection:"column"}}>
//     <p style ={{color: "black", fontFamily: "cursive",fontSize: 40}}>Welcome to allen</p><br></br> 
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkjsLzqA0Iqig_tD2GgPg3w2duz7uWRFXGA&s.png"></img>
//   </div>
// }

// function Class11Program(){
//   const navigate = useNavigate();
//    function redirecttolandingpage(){
//     navigate('/');
//   }
//   function redirecttoclass12(){
//     navigate('/neet/Online-coaching-class-12');
//   }
  
//   return <div>
//       <p style ={{color: "black", fontFamily: "cursive",fontSize: 40}}>NEET programs for class 11th</p>
//       <div style={{display:"flex",flexDirection:"row"}}>
//       <button onClick ={redirecttolandingpage}> go to landing page</button> 
//      <button onClick ={redirecttoclass12}>go to class 12</button>
     
//   </div>
//   </div>
 
// }
// function Class12Program() {
//   const navigate = useNavigate();
//   return <div>
//     <p style ={{color: "black", fontFamily: "cursive",fontSize: 40}}>NEET programs for class 12th</p> <button onClick ={ redirectUser}>Goback to landing page</button>  </div>;
//     function redirectUser(){
//       navigate("/")
//     }
//     return<div>
//       Neet Programs for class 12th

//   </div>
// }
// //layout
// function Layout(){
//   return<div style={{height:"100vh"}}>
//     <p style ={{color:"black"}}>header
//     <Outlet/>
//     footer</p>
//   </div>
// }
//a clock with a  start and stop button

function App(){
  const inputRef = useRef();
  const[value, setValue]= useState(1);
  const valueRef = useRef();
  function focusOnInput(){
    inputRef.current.focus();
    value=2;
  }


}
function App(){
  const[currentCount, setCurrentCount]=useState(1);
return<div>
  {currentCount}
  <br />
  <button> Start</button>
</div>}
export default App
// function App(){
//   const[currentCount, setCurrentCount]= useState(1);
//   const[timer, setTimer]= useState(0);


//   function startClock(){
//     timer = setInterval(function(){
//       setCurrentCount(currentCount=>currentCount+1);

//     }, 1000);
    


//   }
//   function stopClock(){
// console.log(timer);
// clearInterval(timer);
//   }
//   return <div>
//     {currentCount}
//     <br/>
//     <button onClick={startClock}>Start</button>
//     <button onClick= {stopClock}>Stop</button>

//   </div>
// }
  
// export default App

