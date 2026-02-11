// import { useContext } from "react"
// import { mainObj } from "./main.jsx"  


// function App() 
// {

//   const value = useContext(mainObj)

//   return (
//     <>
//       <h1> this is app page </h1>
//       <h1>{value}</h1>
//     </>
//   )
// }

// export default App
import { useContext } from "react"
import { mainObj } from "./main.jsx"  


function App() 
{

  const {name,age} = useContext(mainObj)

  return (
    <>
      <h1> this is app page </h1>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </>
  )
}

export default App
