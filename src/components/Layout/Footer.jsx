import React from 'react'

function Footer() {
    return (
        <div className='md:w-3/4 mx-auto px-3 py-4 md:py-5 lg:py-5 text-slate-500 border-t-[1px] border-slate-700 backdrop-blur-sm bg-black/30 sm:bg-transparent'>
            <div className='flex justify-between items-center'>
                <p className='text-lg text-slate-300 md:hidden'>luma</p>
                <div className='hidden text-sm text-slate-400 md:flex flex-wrap items-center gap-3'>
                    <span className='mr-4 text-xl text-slate-300'>luma</span>
                    <span>What's New</span>
                    <span>Discover</span>
                    <span>Pricing</span>
                    <span>Help</span>
                </div>
                <div className='text-slate-300 flex gap-2 md:gap-5'>
                    <i class="ri-shopping-bag-2-line"></i>
                    <i class="ri-apple-line"></i>
                    <i class="ri-twitter-fill"></i>
                    <i class="ri-instagram-line"></i>
                </div>
            </div>
            <div className='md:hidden text-slate-400 py-3 text-sm w-3/4 flex flex-wrap gap-3'>
                <span>What's New</span>
                <span>Discover</span>
                <span>Pricing</span>
                <span>Help</span>
            </div>
            <div className='lg:py-3 text-xs flex gap-3'>
                <span>Terms</span>
                <span>Privacy</span>
                <span>Security</span>
            </div>
        </div>
    )
}

export default Footer
