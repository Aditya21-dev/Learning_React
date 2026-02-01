import Component_1 from "./Component_1"
import Component_2 from "./Component_2"
import Component_3 from "./Component_3"

function App()
{

  let obj = {
    "name" : "Aditya",
    "age" : 19
  }

  return(
    <>

      <Component_1/>

      <HR></HR>

      <Component_2/{obj}>
      
      <HR></HR>

      <Component_3/>


    </>
  )
}

export default App

