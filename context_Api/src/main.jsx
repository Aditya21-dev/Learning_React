import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

export const mainObj = createContext()
// let data = "hello world from main"

let data = {
  name:"adi" , age:19
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <mainObj.Provider value={data}>
      <App />
    </mainObj.Provider>
  </StrictMode>
)

