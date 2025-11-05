import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate();

    return (
        <div className='md:w-3/4 min-h-screen pt-16 mx-auto flex flex-col justify-center items-center md:flex-row'>
            <div className='text-center md:text-left'>
                <div className=''>
                    <span className='font-medium text-2xl xl:text-3xl text-slate-400'>luma</span>
                    <h1 className='w-full mx-auto md:w-3/4 md:mx-0 my-1 font-semibold text-4xl lg:text-5xl xl:text-6xl text-white'>Delightful events {' '}
                        <span className='block bg-gradient-to-l to-blue-600 via-pink-500 from-red-600 text-transparent bg-clip-text'>start here.</span>
                    </h1>
                </div>
                <p className='px-3 mt-2 text-slate-200 text-base md:w-4/5 lg:text-xl lg:my-4'>Set up an event page, invite friends and sell tickets. Host a memorable event today.</p>
                <button onClick={()=>navigate('/discover')} className='my-4 px-4 py-1 lg:px-6 lg:py-2 lg:font-medium bg-white border-none hover:bg-slate-700 hover:text-white rounded-lg'>Create Your First Event</button>
            </div>
            <div className='mt-4 mb-8 w-full lg:w-2/3 rounded-full'>
                <video width="100%" height="100%" loop muted playsInline autoPlay className="jsx-1876224523 dark-video"><source src="https://cdn.lu.ma/landing/phone-dark.mp4" type="video/mp4;codecs=hvc1" className="" /><source src="https://cdn.lu.ma/landing/phone-dark.webm" type="video/webm" className="" /></video>
            </div>
        </div>
    )
}
