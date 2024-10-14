import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ToDo } from "./Views/ToDo"
import { Layout } from "./layout/Layout"
import { Users } from "./Views/Users"



export const App=()=>{
    return (<BrowserRouter>
        <Routes>
            <Route element={<Layout/>} >
                <Route path="/" element={<Navigate to={"/user"} />} ></Route>
                <Route path="/user" element={<Users />} ></Route>
                <Route path="/todo" element={<ToDo />} ></Route>
            </Route>
        </Routes>
    </BrowserRouter>)
}