import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

type Props = {}

function ContactMe({ }: Props) {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        
    };

    return (
        <div className='h-screen flex relative flex-col text-center md:text-left justify-evenly items-center md:flex-row max-w-7xl px-10 mx-auto'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact Me</h3>


            <div className='flex flex-col space-y-10'>
                <h4 className='text-2xl font-semibold text-center mt-16 xl:text-5xl md:text-4xl'>I have got just what you need</h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[orange] h-6 w-6  xl:w-8 xl:h-8  md:w-8 md:h-8 animate-pulse' />
                        <p className='text-xl xl:text-4xl md:text-3xl'>+38 (099) 643 22 91</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[orange] h-6 w-6 xl:w-8 xl:h-8 md:w-8 md:h-8 animate-pulse' />
                        <p className='text-xl xl:text-4xl md:text-3xl'>l.kvit98@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[orange] h-6 w-6 xl:w-8 xl:h-8 md:w-8 md:h-8 animate-pulse' />
                        <p className='text-xl xl:text-4xl md:text-3xl'>Ukraine Lviv</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput px-1 py-3 xl:px-5 xl:py-5 md:px-3 md:py-3' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput px-1 py-3 xl:px-5 xl:py-5 md:px-3 md:py-3' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput px-1 py-3 xl:px-5 xl:py-5 md:px-3 md:py-3' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput px-1 py-3 xl:px-5 xl:py-5 md:px-3 md:py-3' />
                    <button type='submit' className='bg-[#db9d28] py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-[gray] hover:text-white'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default ContactMe