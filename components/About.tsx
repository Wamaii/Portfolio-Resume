import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';
import Me from '../public/assets/me2.jpg'


type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto item-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

            <motion.div
                className="flex-shrink-0  mt-32"
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}>
                <Image className='w-40 h-40 rounded-full md:rounded-lg md:w-[350px] md:h-[500px] xl:w-[500px] xl:h-[600px] md:mb-0 object-cover ' src={Me} alt={'Picture of the author'}></Image>
            </motion.div>
           
            <div className='space-y-10 px-0 md:px-10 md:mt-12'>
                <h4 className='text-4xl font-semibold sm:text-2xl'>Here ia a little background</h4>
                <p className='text-base'>An industrious skillful front
                    end developer seeking entry level position with company
                    to boost my JS knowledge
                    and contribute to sucessfull
                    development of the product
                    I'm fast learner , eager to gain
                    new expirience and expend
                    my skillset.
                </p>
                 <h4 className='text-4xl font-semibold sm:text-2xl mb-4'>Soft-skills</h4>
                    <ul className='list-disc ml-4'>
                        <li>Ability to work in a team and contribute to goals achievement</li>
                        <li>Ability to organize and prioritize work tasks</li>
                        <li>Good interpersonal communication skills</li>
                        <li> Strong self-discipline</li>
                        <li>Detail-oriented</li>
                    </ul>
            </div>
        </motion.div>
    );
}