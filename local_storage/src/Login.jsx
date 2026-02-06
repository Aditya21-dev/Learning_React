import { useState } from "react"

function Login()
{
    let [logindata,setlogindata] = useState({
        email:"" , password:""
    })

    function inputdata(e)
    {
        let{name,value} = e.target
        setlogindata({...logindata,[name]:value})
    }

    function loginsubmit(e) 
    {
        e.preventDefault
        let local_data = JSON.parse(localStorage.getItem("userdata"))
        if(logindata.email != local_data.email || logindata.password != local_data){
            alert("NOT found")
        }
        else{
            alert("welcome")
        }
    }

    return(
        <>
        <h1> Login </h1>
            <form onSubmit={loginsubmit}>
                <label htmlFor="">Email : </label>
                <input type="text" name="email" onChange={inputdata} />
                <br /> <br />
                <label htmlFor="">Pasword : </label>
                <input type="password" name="password" onChange={inputdata} />
                <br /> <br />

                <input type="Submit" /> 
            </form>
        </>
    )
}
export default Login