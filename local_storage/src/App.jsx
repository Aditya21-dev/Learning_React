import { Route , Routes } from "react-router-dom"
import Sign_up from "./Sign_up"
import Login from "./Login"


function App()
{
  return(
    <>
    <Routes>
      <Route index element = {<Sign_up/>} />
      <Route path='/Login' element = {<Login/>} />

    </Routes>
    </>
  )

}
export default App