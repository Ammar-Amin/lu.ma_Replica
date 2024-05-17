import React from 'react'
import { Link } from 'react-router-dom'

export default function Scrollables() {
    return (
        <Link to='/city'>
            <div className='px-2 py-1 min-w-[155px] flex gap-3 items-center rounded-md hover:bg-gray-700'>
                <img src='https://images.lumacdn.com/discovery/bangalore-icon.png' alt='img'
                    className='w-10 h-10 bg-purple-600 rounded-full'
                />
                <div className=''>
                    <p className='text-white font-medium'>Bengaluru</p>
                    <p className='text-slate-400 text-sm'>11 Events</p>
                </div>
            </div>
        </Link>
    )
}
