import { Routes, Route } from "react-router-dom"
import Insert from "./Insert"
import Fetch from "./Fetch.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Insert />} />
        <Route path="/fetch" element={<Fetch />} />
      </Routes>
    </>
  )
}

export default App