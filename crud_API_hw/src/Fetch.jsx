import axios from "axios"
import { useEffect, useState } from "react"

function Fetch() {
    let [Apidata, setApidata] = useState([])


    function mydelete(id) {
        axios.delete(`http://localhost:3000/userdata/${id}`)
            .then((e) => alert("deleted ... !"))
    }

    useEffect(() => {
        axios.get('http://localhost:3000/userdata')
            .then((res) => setApidata(res.data))
    }, [mydelete])


    let [show, setshow] = useState(false)

    let [editdata, setEditdata] = useState()

    function editinput(e)
    {
        const {name,value} = e.target
        setEditdata({...editdata,[name]:value})
    }

    function finalsubmit(e)
    {
        e.preventDefault()
        axios.put (`http://localhost:3000/userdata/${editdata.id}`,editdata)
        .then((e)=>alert("updated successfull"))
    }
  

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
                    <th> Edit </th>
                </tr>
                {
                    Apidata.map((e) => (
                        <tr>
                            <td> {e.id} </td>
                            <td> {e.name} </td>
                            <td> {e.age} </td>
                            <td> {e.contact} </td>
                            <td> {e.city} </td>
                            <td> <button onClick={() => mydelete(e.id)}> Delete </button></td>
                            <td> <button onClick={() => (setshow(true),setEditdata(e))}> Edit </button></td>
                        </tr>
                    ))
                }
            </table>
            <br />
            <br />

            {
                show && <form onSubmit={finalsubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={editdata.name} onChange={editinput} />
                    <br /><br />

                    <label>Age</label>
                    <input type="text" name="age" value={editdata.age} onChange={editinput}/>
                    <br /><br />

                    <label>Contact</label>
                    <input type="text" name="contact" value={editdata.contact} onChange={editinput}/>
                    <br /><br />

                    <label>City</label>
                    <input type="text" name="city" value={editdata.city} onChange={editinput}/>
                    <br /><br />

                    <input type="submit" />
                </form>
            }
        </>
    )
}
export default Fetch