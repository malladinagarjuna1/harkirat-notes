import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {otp} from './components/otp'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//    <div className='grid grid-cols-12'>
//     <div className='bg-blue-300 col-span-4 sm:col-span-5 text-8xl rounded-2xl'>
//       child1
//     </div>
//     <div className='bg-red-400 col-span-12 sm:col-span-5'>
//       child2
//     </div>
//     <div className='bg-green-600 col-span-2 sm:col-span-2'>
//       child3
//     </div>
//     <div className='sm:bg-blue-300 bg-red-500'>
// hi babes

//     </div>
//     <div className='md:bg-green-300 sm:bg-blue-300'>
//       hi there
//     </div>
//     {/* mobile fixed design */}
//     <div className='grid grid-cols-3 sm:grid-cols-12'>
//       <div className='col-span-1 sm:col-span-4 bg-red-300'>
//         hi 
//       </div>
//       <div className='bg-green-300'>
//         hi 
//       </div>
//   <div className='col-span-12 sm:col-span-5 bg-red-300 text-5xl rounded-full'>
//     hi they!
//   </div>
//   <div className='col-span-12 sm:col-span-5 bg-green-300'>
//   hi 
//   </div>
//   <div className='col-span-12 sm: col-span-12 bg-blue-200'>
//     u there
//   </div>
//     </div>
//     <div className='flex'>
//       <div className='bg-red-500 text-8xl rounded-2xl' style={{flex:1}}>
//         hi 
//       </div>
//       <div className='bg-green-300' style= {{flex: 1}}>
//         hi
//       </div>
//       <div className='bg-pink-200' style= {{flex:4}}>
//          sffd
//       </div>
//       <div className='h-screen bg-blue-700'>
//           <Button disabled= {true}>Sign Up</Button>
//       </div>
    
//     </div>
//    </div>
//     </>
//   )
// }

function App(){
  const [count, setCount] = useState(0);
  return (
    
<div className='h-screen bg-blue-700'>
  <Button disabled={false}>Sign up</Button>


</div>
    
    


    
  )

}

export default App
