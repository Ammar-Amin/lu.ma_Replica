import React from 'react'

export default function Event() {
    return (
        <div className='px-3 pt-1 pb-3 rounded-xl bg-[#202020] border-[1px] border-neutral-950 hover:border-slate-500'>
            <div className='flex justify-between items-center gap-1 md:items-start'>
                <div>
                    <span className='text-xs text-slate-500'>5:00 PM</span>
                    <h1 className='text-white md:text-lg md:mb-2 xl:text-xl md:font-semibold'>HSR FC - Hands on AI Workshop by Microsoft For Startups</h1>
                    <div className='hidden text-sm xl:text-base mt-2 text-slate-500 md:inline'>
                        <p><i className="ri-nextjs-fill "></i> By HSR Founders Club</p>
                        <p><i className="ri-map-pin-line "></i> Urban Vault HSR Layout 65</p>
                    </div>
                </div>

                <img src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=180,height=180/event-covers/mk/76b9afc8-e7ee-4826-845a-6c522647aea9" alt="Cover Image for HSR FC - Hands on AI Workshop by Microsoft For Startups" className='w-16 h-16 rounded-lg sm:w-32 sm:h-32 md:h-[110px]' />

            </div>
            <div className='mt-2 text-slate-500 text-xs sm:hidden'>
                <p><i className="ri-nextjs-fill"></i> By HSR Founders Club</p>
                <p><i className="ri-map-pin-line"></i> Urban Vault HSR Layout 65</p>
            </div>
        </div>
    )
}
