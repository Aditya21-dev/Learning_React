import { useContext } from "react"
import { mainObj } from "./main.jsx"  

function Child_1() {

  const value = useContext(mainObj)

  return (
    <>
      <h1>{value}</h1>
    </>
  )
}

export default Child_1
