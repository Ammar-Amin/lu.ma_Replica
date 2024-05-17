import React from 'react'
import Scrollables from '../components/Scrollables'
import NewsBlog from '../components/NewsBlog'

export default function ExploreEvents() {
    return (
        <div className='pt-16 md:pt-24 px-3 w-full md:w-4/5 lg:w-3/4 xl:w-[70%] md:mx-auto'>
            <h1 className='text-white text-xl font-semibold'>Discover Events</h1>
            <p className='my-4 text-slate-300 text-base'>Every week, we feature some of our favorite events in cities like New York and London. You can also check out some great calendars from the community.</p>
            <div className='my-4 text-[17px]'>
                <h4 className='text-white font-semibold'>Popular Events</h4>
                <h4 className='text-slate-400'>Updated Daily</h4>
            </div>

            <p className='text-slate-400 text-sm'>Asia & Pacific</p>
            <div className='my-2 flex md:flex-wrap gap-2 overflow-x-scroll md:overflow-auto'>
                <Scrollables />
                <Scrollables />
                <Scrollables />
                <Scrollables />
                <Scrollables />
                <Scrollables />
            </div>

            <p className='text-slate-400 text-sm'>Europe</p>
            <div className='my-2 flex md:flex-wrap gap-2 overflow-x-scroll md:overflow-auto'>
                <Scrollables />
                <Scrollables />
                <Scrollables />
                <Scrollables />
                <Scrollables />
                <Scrollables />
            </div>

            <p className='text-slate-400 text-sm'>America</p>
            <div className='my-2 flex md:flex-wrap gap-2 overflow-x-scroll md:overflow-auto'>
                <Scrollables />
                <Scrollables />
                <Scrollables />
                <Scrollables />
                <Scrollables />
                <Scrollables />
            </div>

            <div className='my-3 w-full m-auto h-[1px] bg-slate-600'></div>

            <h1 className='text-white text-xl font-semibold'>Featured Calendars</h1>
            <h3 className='text-lg text-slate-400'>That We Love</h3>

            <div className='py-4 flex flex-wrap flex-col md:flex-row gap-2'>
                <NewsBlog />
                <NewsBlog />
                <NewsBlog />
                <NewsBlog />
                <NewsBlog />
                <NewsBlog />
                <NewsBlog />
                <NewsBlog />
                <NewsBlog />
            </div>

        </div>
    )
}
