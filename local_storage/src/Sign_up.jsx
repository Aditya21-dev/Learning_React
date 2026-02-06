import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Sign_up() 
{
    let [signfrm,setsignfrm] = useState({
        name:"" , age:"" , email:"" , password:""
    })

    let navigator = useNavigate()

    function inputdata(e) 
    {
        const {name,value} = e.target
        setsignfrm({...signfrm,[name]:value})
         
    }
    
    function handledata(e) 
    {
        e.preventDefault()
        localStorage.setItem("userdata",JSON.stringify()) 
        navigator('/Login')   
    }

    return(
        <>
            <h1> Sign up </h1>
            <form onSubmit={handledata}>
                <label htmlFor="">Name : </label>
                <input type="text" name="name" onChange={inputdata} />
                <br /> <br />
                <label htmlFor="">Age : </label>
                <input type="text" name="age" onChange={inputdata} />
                <br /> <br />
                <label htmlFor="">Email : </label>
                <input type="text" name="email" onChange={inputdata} />
                <br /> <br />
                <label htmlFor="">Pasword : </label>
                <input type="password" name="password" onChange={inputdata} />
                <br /> <br />
                <label htmlFor="">Contact : </label>
                <input type="text" name="contact" onChange={inputdata} />
                <br /> <br />

                <input type="Submit" /> 
            </form>
        </>
    )

}
export default Sign_up