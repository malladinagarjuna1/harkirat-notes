import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return <>
//         <div style ={{background:"white", display: "flex", flexDirection: "column",alignItems:"center",borderRadius: 10}}>
//           <Card style = {{background:"yellow", display:"flex",alignItems:"center", flexDirection: "column"}}> 
//               <h1>this is my home </h1>
//               <p>jnklvnlsvndfkvdfvdvf</p>
//           </Card>
          
//                 <Card style ={{background:"yellow", display:"flex",alignItems:"center", flexDirection: "column", padding:10, margin: 10}}>
//             <h2>nklvmdfvd</h2>
//             <p>knkldnvdfvfdbfbdnbdfbnkdbjdgb</p>
//           </Card>
      
//         </div>
//         </>
  
// }

// function Card({children, style}){
//   return <div style ={{background:"black", borderRadius: 10, textcolor: "red", padding: 10, margin: 10 }}>
//     {children}
//   </div>
// }
//use of  keys

// const App =()=>
//  {
//   return {
//   <div>
//   {[
//     <Todo key={1} title={"Go to gym"} done={false}/>
//     ]}
//     </div>


// };
// // };

// function Todo({title, done})
// {
//   return<div>
//     {title} -{done ? "Done!":"Not done!"}
//   </div>
// // } 
// const App =() =>{
//   return (
//     <div>
//     <MyComponent/>
//     </div>

//   );

// };
// function MyComponent(){
//   return (
//     <div style = {{backgroundColor: 'red', color:'white', padding: 10, borderRadius: 20}}>
//     hello, world!
//     </div>
//   );

// }
// export default App

//class based  vs functional components
// const App=() =>{
//   const[isComponentShown, setIsComponentShown] =useState(true)

//   return (
//     <div>
//       {}
//     </div>

//   )
//     }
class ErrorBoundary extends React.Component{
  constructor(props){
    super(props);
    this.state ={hasError: false};

  }
  static getDerivedStateFromError(error){
    return (hasError: true);
  }
  
}


