import { memo, useEffect, useState } from "react"



export const Input=memo(({
    value="",
    onSubmit=()=>{},
    className=""
})=>{
    const [localValue,setLocalValue]=useState("");

    useEffect(()=>{
        setLocalValue(value);
    },[value])

    const handleChange=(e)=>{
        setLocalValue(e?.target?.value);
    }


    const handleSubmit=(e)=>{
        if(e?.key==="Enter"){
            localValue?.length&&onSubmit(localValue);
            setLocalValue("");
        }

    }


    return<div className={" w-full   px-4 py-3  "+className}>
        <div className=" flex rounded overflow-hidden ">

            <input onKeyDown={handleSubmit} value={localValue} className=" w-full p-2 focus:border-b-2 border-amber-800   outline-none text-amber-800 " placeholder="Type Work..." onChange={handleChange}/>
            <button onClick={()=>handleSubmit({key:"Enter"})}  className=" bg-amber-600 text-gray-200 hover:text-gray-100 hover:bg-amber-500 duration-300  px-3 " > Add </button>

        </div>
    </div> 
})