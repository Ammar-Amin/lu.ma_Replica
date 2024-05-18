import React from 'react'

export default function NewsEvent() {
    return (
        <div className='px-3 pt-1 pb-3 rounded-xl bg-[#202020] border-[1px] border-neutral-950 hover:border-slate-500'>
            <span className='text-xs text-slate-500'>9:00 AM</span>
            <div className='flex justify-between items-start gap-1 md:items-start'>
                <div>
                    <h1 className='text-white md:text-lg md:mb-2 xl:text-xl md:font-semibold'>
                        FEMHACK 2024: All-Female Weekend Hackathon
                    </h1>
                    <div className='text-sm xl:text-base mt-2 text-slate-500'>
                        <p><i class="ri-nextjs-fill "></i> By melissa wallace</p>
                        <p><i class="ri-map-pin-line "></i> New York, New York</p>
                    </div>
                </div>

                <img src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=180,height=180/event-covers/ut/eb5900c3-1952-4646-8381-46d2b56868e3" alt="Cover Image for FEMHACK 2024: All-Female Weekend Hackathon" fetchpriority="auto" loading="lazy" srcset="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,quality=75,width=80,height=80/event-covers/ut/eb5900c3-1952-4646-8381-46d2b56868e3 80w, https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=80,height=80/event-covers/ut/eb5900c3-1952-4646-8381-46d2b56868e3 160w, https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,quality=75,width=120,height=120/event-covers/ut/eb5900c3-1952-4646-8381-46d2b56868e3 120w, https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=120,height=120/event-covers/ut/eb5900c3-1952-4646-8381-46d2b56868e3 240w, https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,quality=75,width=180,height=180/event-covers/ut/eb5900c3-1952-4646-8381-46d2b56868e3 180w, https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=180,height=180/event-covers/ut/eb5900c3-1952-4646-8381-46d2b56868e3 360w" sizes="(max-width: 450px) 80px, (max-width: 1000px) 120px, 180px" className="w-20 h-20 rounded-lg" />

            </div>
            {/* <div className='mt-2 text-slate-500 text-xs'>
                <p><i class="ri-nextjs-fill"></i> By melissa wallace</p>
                <p><i class="ri-map-pin-line"></i> New York, New York</p>
            </div> */}
        </div>
    )
}
