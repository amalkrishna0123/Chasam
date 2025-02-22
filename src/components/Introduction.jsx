import React from 'react'
import logo from "../assets/vythiri.png"
import { motion } from "framer-motion"
import video from "../assets/an.webm"

const Introduction = () => {
  return (
    <div className='bg-[#fffffff3] h-screen w-full flex flex-col justify-center items-center fixed top-0 bottom-0 left-0 right-0 z-[999]'>
      <div>
        <div className='w-[100px] h-[100px]'>
          <video src={video} playsInline autoPlay loop muted className='w-full h-full object-contain drop-shadow-md'></video>
        </div>
        {/* <motion.div
        initial={{ scale : 0, opacity : 0}}
        animate={{scale:1, opacity:1, transition:{duration:.1,ease:"backInOut"}}}
        className='w-[150px] h-[150px] flex justify-center items-center mx-auto mb-2 BlobDesign p-2'>
          <img src={logo} alt="" className='w-full h-full object-contain'/>
        </motion.div> */}
        {/* <div className=' font-semibold text-3xl drop-shadow-lg bg-gradient-to-r from-[#1b1b1b] via-[#4c4c4c] to-[#00720d] bg-clip-text text-transparent'>Vythiri Ayurvedic</div> */}
      </div>
    </div>
  )
}

export default Introduction
