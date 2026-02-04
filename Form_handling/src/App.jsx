// import { useState } from "react"

import { useState } from "react"



// function App() {

//   let [frmdata , setfrmdata] = useState()

//   function handledata(e)
//   {
//     console.log(e.target.value)
//     setfrmdata(e.target.value)
//   }

//   let [frmdata_1 , setfrmdata_1] = useState()
//   function handledata_1(e)
//   {
//     console.log(e.target.value)
//     e.preventDefault()
//     setfrmdata_1(e.target.value)
//   }

//   return (
//     <>
//       <h1>{frmdata}</h1>

//       <form action="">
//         <label htmlFor=""> Name </label>
//         <input type="text" onChange={handledata} />
//       </form>
        
//         <hr />

//       <h1 style={{color:'red'}}>{frmdata_1}</h1>

//       <form action="" onSubmit={handledata_1}>
//         <label htmlFor=""> Name </label>
//         <input type="text"/>
//       </form>

//     </>
//   )
// }

// export default App


// import { useState } from "react"



function App() {




  let [frmdata,setfrmdata] = useState({
    username: "",age:"",city:""
  })

  function input_data(event)
  {
    let{name,value} = event.target
    setfrmdata({...frmdata,[name]:value})
  }

  function handlesubmit(e)
  {
    e.preventDefault()
    console.log(frmdata);
  }

  return (
    <>
      <h1>FORM COMPONENT</h1>
      <form action="" onSubmit={handlesubmit}>

        <label htmlFor=""> Name </label>
        <input type="text" name="name" onChange={input_data}/>
        <br /><br />

        <label htmlFor=""> Age </label>
        <input type="text" name="age" onChange={input_data}/>
        <br /><br />


        <label htmlFor=""> City </label>
        <input type="text" name="city" onChange={input_data}/>
        <br /><br />

        <input type="submit" />
      </form>


    </>
  )
}

export default App

