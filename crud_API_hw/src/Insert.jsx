// import axios from "axios"
// import { useState } from "react"

// function Insert() {

//     let [frmdata,setfrmdata] = useState({name:"" , age:"" , contact:"" , city:""})

//     function inputdata(e)
//     {
//         const {name,value} = e.target
//         setfrmdata({...frmdata,[name]:value})
//         .then(() => {alert("Data Saved Successfully")})
//     }

//     function submit(e) 
//     {
//         e.preventDefault()
//         axios.post("http://localhost:3000/userdata",frmdata)    
//     }
//     return (
//         <>
//             <h2>Insert page</h2>

//             <form onSubmit={submit}>

//                 <label htmlFor="">Name</label>
//                 <input type="text" name="name" onChange={inputdata} />
//                 <br /><br />
//                 <label htmlFor="">Age</label>
//                 <input type="text" name="age" onChange={inputdata} />
//                 <br /><br />
//                 <label htmlFor="">Contact</label>
//                 <input type="text" name="contact" onChange={inputdata} />
//                 <br /><br />
//                 <label htmlFor="">City</label>
//                 <input type="text" name="city" onChange={inputdata} />
//                 <br /><br />
//                 <input type="submit" />
//             </form>
//         </>
//     )

// }
// export default Insert


import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Insert() {

    let [frmdata,setfrmdata] = useState({
        name:"" ,
        age:"" ,
        contact:"" ,
        city:""
    })

    function inputdata(e)
    {
        const {name,value} = e.target
        setfrmdata({...frmdata,[name]:value})
    }

    const navigate = useNavigate()

    function submit(e) 
    {
        e.preventDefault()

        axios.post("http://localhost:3000/userdata", frmdata)
        .then(() => {
            alert("Data Saved Successfully")
            navigate("/fetch")
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <h2>Insert page</h2>

            <form onSubmit={submit}>

                <label>Name</label>
                <input type="text" name="name" onChange={inputdata} />
                <br /><br />

                <label>Age</label>
                <input type="text" name="age" onChange={inputdata} />
                <br /><br />

                <label>Contact</label>
                <input type="text" name="contact" onChange={inputdata} />
                <br /><br />

                <label>City</label>
                <input type="text" name="city" onChange={inputdata} />
                <br /><br />

                <input type="submit" />
            </form>
        </>
    )
}

export default Insert