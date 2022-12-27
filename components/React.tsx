import React from 'react'
import { motion } from "framer-motion"


type Props = {}

function Reactt({}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
         <motion.img className='h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 rounded-full border border-gray-500 object-cover
         filter group-hover:grayscale transition duration-300 ease-in-out'
         initial={{
            y: 200,
            opacity: 0
        }}
        transition={{
            duration: 0.7,
        }}
        whileInView={{
            y: 0,
            opacity: 1
        }}
         src="https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png"
         /> 

         <div className='absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out 
         group-hover:bg-white  rounded-full z-0 h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>50%</p>
            </div>
         </div>
    </div>
  )
}

export default Reactt