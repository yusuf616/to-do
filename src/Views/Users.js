import axios from "axios";
import { useEffect, useState } from "react"
import { FaCheck,FaTimes, FaUser } from "react-icons/fa"
import { useNavigate } from "react-router-dom";



export const Users=()=>{

    const [add,setAdd]=useState(false);
    const [users,setUsers]=useState([]);

    const getUsers=()=>{
        axios.get("/users").then(res=>{
            setUsers(res?.data);
        })
    }

    const navigate=useNavigate();


    useEffect(()=>{
        getUsers();
    },[])

    return (<div className=" w-full h-full flex justify-center items-center ">
        <div>
            <button onClick={()=>setAdd(true)}  className=" px-[10px]   h-full bg-amber-300 text-3xl text-gray-600 p-2 rounded-sm hover:text-gray-700 hover:bg-amber-400 duration-300 flex justify-start items-center   " > +<FaUser  /></button>
            {add&&<AddModel  toggle={(e)=>{ e&&getUsers();setAdd(false)}} />}
            <table className=" mt-4 w-[300px] text-white ">
                <thead>
                    <tr className=" border-b  ">
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Proccess
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=><tr key={index}  className=" border-b  ">
                        <td> {user.name} </td>
                        <td> {user.email}</td>
                        <td> <FaCheck className=" cursor-pointer bg-orange-200 p-1 text-gray-600 hover:bg-orange-300   " onClick={()=>{navigate("/todo",{state:{user}})}} /> </td>
                    </tr>)}
                    
                </tbody>
            </table>
        </div>
    </div>)
} 




const AddModel=({toggle=()=>{}})=>{



    const handleSubmit=(e)=>{
        e.preventDefault()

        const name=Object.values(e?.target?.[0])?.[4];
        const email= Object.values(e?.target?.[1])?.[4];

        axios.post("users",{name,email}).then((res)=>{
            if(res?.status===201){
                toggle(true)
            }
        })
        
    }

    return <div className=" fixed bg-black bg-opacity-25 top-0 left-0 w-full h-full flex justify-center items-center ">
        <div className=" bg-white p-4 rounded-xl overflow-hidden shadow-xl  " >
            <div className=" flex justify-between " >
                <h1> New User </h1>
                <FaTimes  onClick={toggle} className=" cursor-pointer " color="#f00" />
            </div>

            <form onSubmit={handleSubmit} className=" flex flex-col " >
                <input name="name" className=" outline-none border-b-2 p-2 w-[300px] " placeholder="name..."   />
                <input name="email" className=" outline-none border-b-2 p-2 w-[300px] " placeholder="email..."   />
                <button type="submit" className=" mt-4 bg-orange-500 p-2 text-white hover:bg-orange-400 duration-300 rounded-md " > Add </button>
            </form>
        </div>

    </div>
}