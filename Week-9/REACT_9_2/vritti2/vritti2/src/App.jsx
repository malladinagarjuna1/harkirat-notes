import React,{ useState, useEffect} from "react" 


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//   <div style={{background:"",height:"100vh"}}>
//     <div style = {{display: "flex", justifyContent: "center"}}>
//        <div>
      
//           <ToggleMessage/>
//           <ToggleMessage/>
//         <ToggleMessage/>
//        </div>
// </div>    
//   </div>
  
//   )
// }
// // const ToggleMessage ={} => {
// //   let [isVisible, setIsVisible] = useState(true);

// //    const [isVisible, setisVisible]=useState(false);
// //   return {
// //     <div>
// //     <button onClick{()=> setisVisible(!isVisible)}>
// //     Toggle Message</button>
// //     {isVisible && <p>This message is conditionally rendered</p>}
// //     </div>

// //   } 
// // }
// const ToggleMessage =()=>{
//   let[notificationCount, setNotificationCount]= useState(0);
 
//   console.log("re-render");
//   function increment(){
//     setNotificationCount(notificationCount +1);
//     }
//     return {
//       <div>
//       <button onClick={increment}>
//       Increase count
//       </button>
//       {notificationCount}
//       </div>

//     };
// };

// document.getElementById("").appendChild
// const style = {width: 200,backgroundColor:"white", borderRadius:10, borderColour:"gray", borderwidth:1, padding: 20}

// function PostComponent(){
//   return <div style ={{display: "flex"} }>
// <img src = {"data:image/jpeg;base64,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.jpg"} style={{
//   width: 30,
//   height: 30,
//   borderRadius:20
// }}/>
// <div style = {{fontSize:10, marginLeft: 10}}>
//   <b>
//     100xdevs
//   </b>
//   <div>
//     23,300 followers
//   </div>
//   <div>12x</div>
// </div>
// <div style ={{fontSize: 12}}>
//   What to know how to win big? check out the how these folks won $6000 in bounties.
// </div>
//   </div>
// }
// //STRUCTURING YOUR APP INTO COMPONENTS
// export default App


// //conditional rendering
// // import React, {useState} from 'react'
// // const ToggleMessage =() =>{
// //   const[isVisible, setisVisible]= useState(false);
// //   return {
// //     <div>
// //     <button onClick={()=>setisVisible(!isVisible)}>
// //     Toggle Message</button>
// //   {isVisible && <p>This message is conditionaly rendered</p>}
// //     </div>
// //   };
// // // }
// import { useState } from "react";
// import { PostComponent } from "./Post";

// function App(){
// const [count, setCount]=useState(1);
// function increasecount(){
//   setCount(count+1);}
// }
// return <div>
//   <div style={{displaY:flex}}>
//     <div style ={{background:"red",borderRadius:20, width:20, height:10}}>
//       {count};
//     </div>
    
//   </div>
//   <img style ={{cursor:"pointer"}} src={"`"} width={40}/>

// </div>}
// export default App
// function App(){
//   const [count, setCount]= useState(1);
//  function increaseCount(){
//   setCount(currentValue => currentValue+1);
//  }
//  useEffect(function(){
//   console.log("above setInterval")
//   setInterval(increaseCount,2);
//  },[])
// return <div>
//   {count}
// </div>
// }
// export default App;
// function App(){
//   const{count, setCount}= useState(1);
//   function increaseCount(){
//     console.log("increase count called"+count);
//     setCount(count+1);
//   }
//   useEffect(function(){
//     console.log("above setinterval")
//     setInterval(increaseCount, 1000);
//   },[]
//   )
// return<div>
//   {count}
// </div>
// }
// export default App

// function App(){
//   const[count, setCount]=useState(1);

//   function increaseCount(){
//     setCount(currentValue=>currentValue+1);
//   }
//   useEffect(function(){
//     console.log("above setInterval")
//     setInterval(increaseCount, 1000);

//   },[])
//   return <div>
//     {count}
//   </div>
// }
// function App(){
//   const [count, setCount]= useState(1);
//   const [count2, setCount2]= useState(1);

//   function increaseCount(){
//     setCount(currentValue => currentValue+1);
//   }
//   function decreaseCount(){
//     setCount2(currentValue=> currentValue -1);
//     }
//   useEffect(function(){
//     setInterval(increaseCount, 5000);
//     setInterval(decreaseCount,8000);
//   }, [])
//  useEffect(function() {

//  })
//   return <div>
  
//     {count}{count2}
//   </div>
// }
// export default App
// function App(){
//   return <div>
//     <button>Feed</button>
//     <button>Notifications</button>
//     <button>Messa</button>
//   </div>
// // }
// function App(){
//   const [count, setCount]= useState(1);
//   const[count2, setCount2]= useState(1);
//   function increaseCount(){
//     setCount(currentValue => currentValue +1);
//   }

//   function decreaseCount(){
//     setCount2(currentValue => currentValue -1);
//   }
//   useEffect(function(){
//     setInterval(increaseCount, 5000);
//     setInterval(decreaseCount, 8000);
//   },{})
//   useEffect(function(){
//     console.log("the count has been updated to "+count);

//   },{count});
//   return<div>
//     {count}{count2}
//   </div>
// }
//red-black color toggle
// function App(){
//   const{currentTab, setCurrentTab}= useState("feed");
//   return <div>
//     <button on Click={function(){
//       setCurrentTab(1)}}style={{color: currentTab == 1?"red":"black"}}>Todo #1</button>
//       <button on Click={function(){
//         setCurrentTab(1)
//       }}style ={{color: currentTab==1 ?"red":"black"}}>Todo #1</button>
//     </div>
// }
const Timer = function(){
  const[seconds, setSeconds]=useState(0);
  useEffect(function(){
    setInterval(function(){
      setSeconds(prev=> prev +1);
    }, 1000);
    
  }, []);
}

const Timer = function(){
  const {seconds, ser}
}
export default App