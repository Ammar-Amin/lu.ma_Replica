import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='w-full border-b-[1px] backdrop-blur-sm border-slate-700 fixed top-0 z-50'>
            <header
                className="px-3 py-2 md:px-6 md:py-4 text-slate-400 flex justify-between items-center">
                <i class="ri-bard-fill md:text-xl hover:text-white"></i>
                <div
                    className="text-sm flex items-center gap-3 md:gap-6">
                    <span className='hidden md:inline hover:text-white'>8:16 PM GMT+5:30</span>
                    <Link to='/discover'
                        className="hover:text-white">
                        Explore Events <i class="ri-arrow-right-up-line"></i>
                    </Link>
                    <button
                        className="px-4 py-1 rounded-2xl hover:text-white bg-[rgba(55,58,59,0.8)]"
                    >
                        Sign In
                    </button>
                </div>
            </header>
        </div>

    )
}

export default Header
