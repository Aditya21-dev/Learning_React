import { useState } from "react"
function Component_1()
{
  const [count, setCount] = useState(0)

  return(
    <>
      <h2 className="counter"> {count} </h2>
      <button onClick={() => setCount((count) => count + 1)}> Add Count </button>

    
    
    </>
  )
}

export default Component_1
