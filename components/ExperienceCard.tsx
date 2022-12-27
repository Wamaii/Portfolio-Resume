import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';
import Me from '../public/assets/me1.jpg'


type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 
    flex-shrink-0 w-[350px] md:w-[650px] xl:w-[850px] snap-center bg-[#292929] p-10
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mt-24'>
        <motion.img 
            initial={{
                y:-100,
                opacity:0,
            }}
            transition={{
                duration:1.2
            }}
            whileInView={{
                opacity:1,
                y:0
            }}
            viewport={{
                once:true
            }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' 
            src="data:image/png;base64,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" alt="" 
        />

            <div className='px-0 md:px-10 space-y-3'>
                <h4 className='text-4xl font-light'>Levi9</h4>
                <p className='font-bold text-2xl mt-1'>Front End course</p>
                <div className='flex space-x-5 my-2'>
                    <img className='h-10 w-10 rounded-full' src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="" />
                    <img className='h-10 w-10 rounded-full' src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="" />
                    <img className='h-10 w-10 rounded-full' src="https://www.shellandco.net/wp-content/uploads/2015/01/logojs.png" alt="" />
                    <img className='h-10 w-10 rounded-full' src="https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png" alt="" />
                </div>
                <p className='uppercase py-5 text-gray-300'>Start 08.09.2020 - Ended 20.01.2021</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Read a lot of info about front end</li>
                    <li>Learned HTML and CSS</li>
                    <li>Learned JavaScript</li>
                    <li>Learned React and learned any JavaScript library</li>
                    <li>Did a finally project with all technology</li>
                </ul>
            </div>

    </article>
  )
}