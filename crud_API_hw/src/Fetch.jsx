import axios from "axios"
import { useEffect, useState } from "react"

function Fetch() {
    let [Apidata, setApidata] = useState([])

    function mydelete(id)
    {
        axios.delete(`http://localhost:3000/userdata/${id}`)
        .then((e)=>alert("deleted ... !"))
    }

    useEffect(() => {
        axios.get('http://localhost:3000/userdata')
            .then((res) => setApidata(res.data))
    }, [mydelete])

    return (
        <>
            <h2> Fetch Page </h2>
            <br />
            <br />
            <table border="">
                <tr>
                    <th> Id </th>
                    <th> Name </th>
                    <th> Age </th>
                    <th> Contact </th>
                    <th> City </th>
                    <th> Delet </th>
                </tr>
                {
                    Apidata.map((e) => (
                        <tr>
                            <td> {e.id} </td>
                            <td> {e.name} </td>
                            <td> {e.age} </td>
                            <td> {e.contact} </td>
                            <td> {e.city} </td>
                            <td> <button onClick={()=>mydelete(e.id)}> Delete </button></td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}
export default Fetch