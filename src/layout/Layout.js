import { Outlet } from "react-router-dom"




export const Layout=()=>{
    return <>
        <div className=" w-screen bg-amber-600 h-screen ">
            <Outlet/>
        </div>
    </>
}