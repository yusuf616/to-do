import {motion} from "framer-motion"
import { Input } from "../components/Input"
import { useState } from "react"
import { WorkItems } from "../components/WorkItems";


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
                        {/* <motion.li initial={{y:100,opacity:0}} animate={{y:0,opacity:1}}  className=" w-full h-[60px] overflow-hidden flex justify-between items-center bg-amber-50 border border-amber-400 rounded-lg   " >
                            <div className=" px-4 flex overflow-hidden ">
                                <p style={{  textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: '100%' }}  >
                                    AAAA hhh hhhh hhhh hhh hh hhh hhhh hhh  justify-between items-center 
                                </p>
                            </div>
                            <button className=" px-[10px]   h-full bg-amber-600 text-3xl text-gray-200 hover:text-gray-100 hover:bg-amber-500 duration-300   " ><PiEnvelopeSimpleOpenLight  /></button>
                        </motion.li> */}
                   
                
            </motion.div>
        </div>
    </div>
}