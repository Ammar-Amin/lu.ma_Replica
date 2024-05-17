import React from 'react'
import Event from '../components/Event'

export default function City() {
    return (
        <div className='w-full min-h-screen'>
            <div className='w-full h-[500px] md:h-screen bg-[url("https://images.lumacdn.com/discovery/bangalore-mobile.jpg")] sm:bg-[url(https://images.lumacdn.com/discovery/bangalore-desktop.jpg)] bg-no-repeat bg-cover sm:bg-center relative'>
                <div className='px-3 absolute bottom-4 sm:w-1/2 md:w-[30%] sm:bottom-[20%] md:left-[18%]'>
                    <img src='https://images.lumacdn.com/discovery/bangalore-icon.png' alt='img'
                        className='mb-2 w-10 h-10 md:w-14 md:h-14 bg-slate-500 rounded-full'
                    />
                    <h1 className='mb-[-5px] md:mb-0 text-lg md:text-2xl md:font-semibold text-slate-300'>What's Happening in</h1>
                    <h1 className='text-2xl md:text-5xl md:mb-3 text-white font-semibold'>Bengaluru</h1>
                    <span className='text-xs md:text-sm text-slate-300'><i class="ri-time-line"></i> 11.02 AM GMT +5:30</span>

                    <div className='my-2 md:mt-4 w-full h-[1px] bg-slate-400'></div>

                    <p className='mb-4 md:my-6 text-sm text-white'>Discover events from AI to climate and travel in Bengaluru. The community in this vibrant city comes together for a brighter, more meaningful future.</p>

                    <form onSubmit={(e) => e.preventDefault()}
                        className='h-7 md:h-9 flex justify-between md:justify-normal gap-1 md:gap-3'>
                        <input type='email' className='w-1/2 px-4 rounded-2xl bg-black/15 outline-none text-white text-sm' placeholder='me@email.com' />
                        <input type='submit' value='Subscribe' className='px-4 rounded-2xl bg-white text-black text-sm' />
                        <i class="ri-map-2-line md:hidden text-lg px-1 rounded-2xl bg-black/15 text-white"></i>
                    </form>
                </div>
            </div>

            <div className='bg-neutral-900 pb-4'>
                <div className='w-[90%] lg:w-[70%] mx-auto flex'>
                    <div className='w-full md:w-2/3'>
                        <div className='px-4 py-4 md:py-8 md:pl-0 flex justify-between'>
                            <h1 className='text-white font-semibold md:text-2xl'>Events</h1>
                            <div className='text-xs md:text-base flex gap-2'>
                                <button className='text-slate-500 hover:text-white px-2 rounded-md bg-stone-800'>+ Submit Event</button>
                                <i class="ri-rss-line text-slate-500 hover:text-white px-2 py-1 rounded-md bg-stone-800"></i>
                                <i class="ri-search-line text-slate-500 hover:text-white px-2 py-1 rounded-md bg-stone-800"></i>
                            </div>
                        </div>
                        <div className='flex md:gap-3'>
                            <div className='w-[2px] h-auto border-slate-700 border-l-2 border-dashed'></div>
                            <div>
                                <span className='text-white'>Today <span className='text-slate-500 font-semibold'>Friday</span></span>
                                <div className='mt-4 px-3 flex flex-col gap-2'>
                                    <Event />
                                    <Event />
                                    <Event />
                                    <Event />
                                    <Event />
                                    <Event />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:inline w-1/3 py-8 px-8 text-white'>
                        <img src='https://images.lumacdn.com/discovery/bangalore-icon.png' alt='img'
                            className='mb-2 w-10 h-10 bg-slate-500 rounded-full'
                        />
                        <h1 className='text-xl font-semibold'>Bengaluru</h1>
                        <p className='text-sm'>Discover the hottest events in Bengaluru, and get notified of new events before they sell out.</p>
                        <input type='email' className='w-full my-3 px-4 py-1 rounded-2xl bg-neutral-800 outline-none ' placeholder='me@email.com' />
                        <input type='submit' value='Subscribe' className='w-full px-4 py-1 rounded-2xl bg-white text-black ' />
                    </div>
                </div>
            </div>
        </div>
    )
}
