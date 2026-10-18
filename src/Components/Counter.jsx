// import { useState } from "react"
// import "./Counter.css"


// // object,object rendering
// const CounterApp = () => {
//     let [count, setcount] = useState(0)
   
   
//     let [std,setStd]=useState({
//         name :"asad",
//         rollno:123,
//         cnic
//         ,age
//         course,
//     })

//     const increment = () => {
//         setcount(count+1)
//     }

//     const decrement = () => {
//         if (count > 0) {
//             setcount(count-1)
//         }
//     }
//     return (
//         <div>
//             <h1>
//                 Name :{std.name} {std.rollno}</h1>
//             <h1 style={{
//                 backgroundColor: "red",
//                 textAlign: "center",
//                 color: "white"
//             }}>
//                 Counter App</h1>
//             <h2 className="smit">{count}</h2>
//             <button onClick={() => increment()}>+</button>
//             {
//                 count >0 
//                 ?
//                  <button onClick={() => decrement()}>-</button>
//                  :
//                  null

//             }
           


//         </div>
//     )
// }

// export default CounterApp