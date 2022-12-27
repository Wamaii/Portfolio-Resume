import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import Image from 'next/image';
import Me from '../public/assets/me1.jpg'



type Props = {}

export default function Hero({}: Props) {
    const [text , count] = useTypewriter({
        words: ["Hi, My name is Kvit Luibomyr" , "I'm newcomer in Frontend development" , "And this my portfolio resume" ],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image src={Me} className="relative rounded-full h-40 w-40 mx-auto object-cover" alt={'image of me'}></Image>
        <div className='z-20'>
            <h2 className='text-md uppercase text-gray-500 pb-2 tracking-[15px]'>Frontend Developer</h2>  
            <div className='pt-4'>
                 <a href="kvit.pdf" download className='text-3xl text-orange-400 hover:text-gray-500'>Download CV</a>
            </div>   
            <h1 className='text-3xl lg:text-5xl md:text-4xl font-semibold px-10 py-6'>
                <span className='m-3'>{text}</span>
                <Cursor cursorColor="orange"/>
            </h1> 


            <div className='pt-5'>
                <Link href="#about">
                <button className='heroButton '>About</button>
                </Link>

                <Link href="#experience">
                <button className='heroButton'>Experience</button>
                </Link>

                <Link href="#skills">
                <button className='heroButton'>Skills</button>
                </Link>

                <Link href="#contact">
                <button className='heroButton'>Contact me</button>
                </Link>               
            </div>
        </div>
       
    </div>
  )
}