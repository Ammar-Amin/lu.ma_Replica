import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsBlog() {
    return (
        <Link to='/news'>
            <div className='md:w-80 mx-auto p-3 border-[1px] border-slate-600 rounded-lg bg-[#202122] relative'>
                <div className='flex justify-between'>
                    <img src='https://images.lumacdn.com/discovery/bangalore-icon.png' alt='img'
                        className='w-16 h-16 bg-orange-500 rounded-lg'></img>
                    <button className='absolute right-2 px-4 py-1 text-slate-300 bg-slate-700 border-none hover:bg-slate-400 hover:text-white rounded-3xl'>Subscribe</button>
                </div>
                <h1 className='mt-4 text-white font-semibold'>NY Tech Week</h1>
                <p className='text-sm text-slate-400'>Explore NY Tech Week side events from June 3-9, showcasing the latest in technology and innovation across diverse sectors</p>
            </div>
        </Link>
    )
}
