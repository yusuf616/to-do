import {motion} from "framer-motion"
import { memo, useEffect, useState } from "react"
import { FaCheck, FaTimes, FaTrash } from "react-icons/fa"
import { PiEnvelopeSimpleOpenLight } from "react-icons/pi"


export const WorkItems=memo(({
    delay=0,
    duration=1,
    items=[],
    backItems=()=>{}
})=>{

    const handleProcess=(prc,item)=>{
        switch(prc){
            case "delete":
                console.log(prc,item,items,items.filter(i=>i?.id!==item?.id))
                backItems(items.filter(i=>i?.id!==item?.id))
                break;
            default:
        }
    }

    return (<ul className="  px-3  h-[430px] overflow-y-auto pb-4 ">
        {items.map((item,index)=> <Item onProcess={(prc)=>handleProcess(prc,item)}  key={index} item={item} />)}
    </ul>)
})



const Item=memo(({
    item,
    onProcess=()=>{}
})=>{
    
    const [showProcess,setShowProcess]=useState(null)

    const handleProcessClick=(prc)=>{
        onProcess(prc);
        setShowProcess(false);

    }

    return <motion.li  initial={{y:100,opacity:0}} animate={{y:0,opacity:1}}  className=" w-full my-1 h-[60px] overflow-hidden flex relative justify-between items-center bg-amber-50 border border-amber-400 rounded-lg   " >
        <div className=" px-4 flex overflow-hidden ">
            <p style={{  textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: '100%' }}  >
                {item?.work} 
            </p>
        </div>
        <button onClick={()=>setShowProcess(true)}  className=" px-[10px]   h-full bg-amber-600 text-3xl text-gray-200 hover:text-gray-100 hover:bg-amber-500 duration-300   " ><PiEnvelopeSimpleOpenLight  /></button>

        {showProcess&&<Process isOpen={showProcess} onClick={handleProcessClick} />}

    </motion.li>

})


const Process=({
    onClick=()=>{},
    isOpen
})=>{


    const [select,setSelect]=useState(false);

    

    const process=[
        { Icon:FaCheck,onClick:()=>{ setTimeout(()=>onClick("finsh"),300);setSelect(true) } },
        { Icon:FaTrash,onClick:()=>{setTimeout(()=>onClick("delete"),300);setSelect(true)} },
        { Icon:FaTimes,onClick:()=>{setTimeout(()=>onClick("close"),300);setSelect(true) } }
    ]


    console.log(select);
    return (<motion.div initial={{width:0}} animate={ !select?{width:"100%"}:{width:0,opacity:0}} transition={{duration:0.2}}   className=" absolute right-0 overflow-hidden flex justify-end items-center   h-full w-full bg-amber-700 bg-opacity-50   ">
        {process?.map((P,index)=>
            <motion.div onClick={P?.onClick} initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.3,delay:0.3+0.3*(process?.length-1-index)}}    key={index} >
                <div  className=" text-white cursor-pointer hover:scale-105 rounded-full duration-300 mx-2 flex justify-center items-center text-2xl border-white border-4 w-10 h-10    " > 
                    <P.Icon />
                </div>
            </motion.div>

        )}        
    </motion.div>)
}