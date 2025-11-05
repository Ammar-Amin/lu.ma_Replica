import React from 'react'
import Event from '../components/Event'
import NewsEvent from '../components/NewsEvent'
import Calender from '../components/Calender'

export default function News() {
    return (
        <div className='w-full bg-[rgb(50,0,0)]'>
            <div className='pt-12 md:pt-16 w-full lg:w-2/3 lg:mx-auto'>
                <div className='relative'>
                    <div>
                        <img src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=1250,height=357.14285714285717/calendar-cover-images/69/4cf58c6a-a887-46e9-9e5a-a49e1b06352b" alt="Cover Image for Calendar" fetchpriority="high" loading="eager" srcSet="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,quality=75,width=450,height=128.57142857142858/calendar-cover-images/69/4cf58c6a-a887-46e9-9e5a-a49e1b06352b 450w, https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=450,height=128.57142857142858/calendar-cover-images/69/4cf58c6a-a887-46e9-9e5a-a49e1b06352b 900w, https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,quality=75,width=650,height=185.71428571428572/calendar-cover-images/69/4cf58c6a-a887-46e9-9e5a-a49e1b06352b 650w, https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=650,height=185.71428571428572/calendar-cover-images/69/4cf58c6a-a887-46e9-9e5a-a49e1b06352b 1300w, https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,quality=75,width=820,height=234.28571428571428/calendar-cover-images/69/4cf58c6a-a887-46e9-9e5a-a49e1b06352b 820w, https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=820,height=234.28571428571428/calendar-cover-images/69/4cf58c6a-a887-46e9-9e5a-a49e1b06352b 1640w, https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,quality=75,width=1000,height=285.7142857142857/calendar-cover-images/69/4cf58c6a-a887-46e9-9e5a-a49e1b06352b 1000w, https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=1000,height=285.7142857142857/calendar-cover-images/69/4cf58c6a-a887-46e9-9e5a-a49e1b06352b 2000w, https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,quality=75,width=1250,height=357.14285714285717/calendar-cover-images/69/4cf58c6a-a887-46e9-9e5a-a49e1b06352b 1250w, https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=1250,height=357.14285714285717/calendar-cover-images/69/4cf58c6a-a887-46e9-9e5a-a49e1b06352b 2500w" sizes="(max-width: 450px) 450px, (max-width: 650px) 650px, (max-width: 820px) 820px, (max-width: 1000px) 1000px, 1250px" className="jsx-4068354093 " />
                    </div>
                    <div className='w-full px-3 lg:px-6 xl:px-8 absolute top-[75%] md:top-[85%]'>
                        <div className='flex justify-between items-end'>
                            <div className="w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-lg bg-cover" style={{ backgroundImage: 'url("https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=96,height=96/calendars/5f/d5ffc7f1-4151-4c60-9702-a5fef6adb712")' }} />
                            <div>
                                <button className='px-3 py-1 text-xs xl:text-sm rounded-md bg-orange-600 text-white'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12 mb-4 px-3 lg:px-6 xl:px-8'>
                    <h1 className='text-2xl text-white md:font-semibold md:text-3xl'>NY Tech Week</h1>
                    <p className='my-2 text-xs md:text-sm xl:text-base text-slate-400'>
                        Explore NY Tech Week side events from June 3-9, showcasing the latest in technology and innovation across diverse sectors, connecting industry leaders and startups in New York City.</p>
                    <div className='flex gap-2 text-slate-500 md:text-lg'>
                        <i className="ri-twitter-fill hover:text-slate-200"></i>
                        <i className="ri-youtube-fill hover:text-slate-200"></i>
                        <i className="ri-global-line hover:text-slate-200"></i>
                    </div>
                </div>
                <div className='px-3 pb-4 flex gap-2 overflow-x-scroll md:overflow-auto text-xs text-slate-400'>
                    <span className="px-2 py-1 bg-neutral-700 rounded-md text-nowrap hover:text-black hover:bg-neutral-400">
                        <i className="ri-global-line mr-1"></i>
                        EDTM (New York) 9:12 PM
                        <i className="ri-arrow-down-s-line ml-1"></i>
                    </span>
                    <span className="px-2 py-1 bg-neutral-700 rounded-md text-nowrap hover:text-black hover:bg-neutral-400">
                        All Events
                        <i className="ri-arrow-down-s-line ml-1"></i>
                    </span>
                    <span className="px-2 py-1 bg-neutral-700 rounded-md text-nowrap hover:text-black hover:bg-neutral-400">
                        <i className="ri-map-2-line mr-1"></i>
                        Show Map
                    </span>
                    <span className="px-2 py-1 bg-neutral-700 rounded-md text-nowrap hover:text-black hover:bg-neutral-400">
                        <i className="ri-rss-line"></i>
                    </span>
                </div>
                <div className='px-4 pt-2 md:py-4 flex justify-between border-t-[1px] border-slate-800'>
                    <h1 className='text-white font-semibold md:text-2xl'>Events</h1>
                    <div className='text-xs md:text-base flex gap-2'>
                        <button className='text-slate-500 hover:text-black hover:bg-neutral-400 px-2 rounded-md bg-stone-800'>+ Submit Event</button>
                        <i className="ri-boxing-line text-slate-500 hover:text-black hover:bg-neutral-400 px-2 py-1 rounded-md bg-stone-800"></i>
                        <i className="ri-menu-line text-slate-500 hover:text-black hover:bg-neutral-400 px-2 py-1 rounded-md bg-stone-800"></i>
                        <i className="ri-search-line text-slate-500 hover:text-black hover:bg-neutral-400 px-2 py-1 rounded-md bg-stone-800"></i>
                    </div>
                </div>
                <div className='px-3 pb-4 md:flex lg:gap-3 mt-3 lg:mt-0'>
                    <div className='w-[2px] h-auto border-slate-700 border-l-2 border-dashed'></div>
                    <div className='md:w-[70%]'>
                        <span className='ml-3 text-white'>Today <span className='text-slate-500 font-semibold'>Friday</span></span>
                        <div className='mt-3 px-3 flex flex-col gap-2'>
                            <NewsEvent />
                            <NewsEvent />
                            <NewsEvent />
                            <NewsEvent />
                            <NewsEvent />
                            <NewsEvent />
                            <NewsEvent />
                            <NewsEvent />
                            <NewsEvent />
                            <NewsEvent />
                        </div>
                    </div>
                    <div className='hidden md:inline w-[30%] px-4 text-white'>
                        <Calender />
                        <div className='w-[300px] flex flex-col'>
                            <h1 className='text-xl font-medium my-5 p-3 border-[1px] border-gray-600'>Filter</h1>
                            <div className='mt-[-20px] py-2 flex flex-col gap-2 border-[1px] border-gray-600'>
                                <div className='px-3 flex justify-between hover:font-medium'>
                                    <label htmlFor='allEvents'>All Events</label>
                                    <input name='event' type='radio' value='allEvents' />
                                </div>
                                <div className='px-3 flex justify-between hover:font-medium'>
                                    <label htmlFor='availableOnly'>Available Only</label>
                                    <input name='event' type='radio' value='availableOnly' />
                                </div>
                            </div>
                            <div className='py-2 flex flex-col gap-2 border-[1px] border-gray-600'>
                                <div className='px-3 flex justify-between hover:font-medium'>
                                    <label htmlFor='Active'>Active</label>
                                    <input name='otherFilter' type='radio' value='Active' />
                                </div>
                                <div className='px-3 flex justify-between hover:font-medium'>
                                    <label htmlFor='AI'>AI</label>
                                    <input name='otherFilter' type='radio' value='AI' />
                                </div>
                                <div className='px-3 flex justify-between hover:font-medium'>
                                    <label htmlFor='Climate'>Climate</label>
                                    <input name='otherFilter' type='radio' value='Climate' />
                                </div>
                                <div className='px-3 flex justify-between hover:font-medium'>
                                    <label htmlFor='Consumer'>Consumer</label>
                                    <input name='otherFilter' type='radio' value='Consumer' />
                                </div>
                                <div className='px-3 flex justify-between hover:font-medium'>
                                    <label htmlFor='Cowork'>Cowork</label>
                                    <input name='otherFilter' type='radio' value='Cowork' />
                                </div>
                                <div className='px-3 flex justify-between hover:font-medium'>
                                    <label htmlFor='Finance'>Finance</label>
                                    <input name='otherFilter' type='radio' value='Finance' />
                                </div>
                                <div className='px-3 flex justify-between hover:font-medium'>
                                    <label htmlFor='Hardware'>Hardware</label>
                                    <input name='otherFilter' type='radio' value='Hardware' />
                                </div>
                                <div className='px-3 flex justify-between hover:font-medium'>
                                    <label htmlFor='Healthcare'>Healthcare</label>
                                    <input name='otherFilter' type='radio' value='Healthcare' />
                                </div>
                                <div className='px-3 flex justify-between hover:font-medium'>
                                    <label htmlFor='LatAm'>LatAm</label>
                                    <input name='otherFilter' type='radio' value='LatAm' />
                                </div>
                                <div className='px-3 flex justify-between hover:font-medium'>
                                    <label htmlFor='Social'>Social</label>
                                    <input name='otherFilter' type='radio' value='Social' />
                                </div>
                                <div className='px-3 flex justify-between hover:font-medium'>
                                    <label htmlFor='Web3'>Web3</label>
                                    <input name='otherFilter' type='radio' value='Web3' />
                                </div>
                                <div className='px-3 flex justify-between hover:font-medium'>
                                    <label htmlFor='Women'>Women</label>
                                    <input name='otherFilter' type='radio' value='Women' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
