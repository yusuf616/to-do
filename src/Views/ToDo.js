import {motion} from "framer-motion"
import { Input } from "../components/Input"
import { useEffect, useState } from "react"
import { WorkItems } from "../components/WorkItems";
import axios from "axios";
import { wait } from "@testing-library/user-event/dist/utils";


export const ToDo=()=>{

    const [works,setWorks]=useState([]);




  


    return <div className=" w-full h-full flex justify-center items-center ">
        <div>
            <div className="  mb-[1rem] text-4xl font-bold flex justify-center  text-amber-100 ">
                <motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5}} >To</motion.div> 
                <motion.div initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{ delay:0.5,duration:0.5}}>Do</motion.div> 
            </div>
            <motion.div initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{ delay:1,duration:0.5}}  className=" w-[500px] overflow-hidden rounded-lg  bg-amber-100 h-[500px] " >
                <Input 
                    className="h-[70px]"
                    onSubmit={(e)=>setWorks(prev=>[
                        ...prev,
                        {
                            id:(prev[prev?.length-1]?.id||0)+1,
                            work:e
                        }
                    ])}
                />
                
                  
                <WorkItems items={works} backItems={(tempItems)=>{setWorks(tempItems)}} delay={1} duration={3} />                
            </motion.div>
        </div>
    </div>
}