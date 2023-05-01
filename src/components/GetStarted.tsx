import React from 'react'

function GetStarted() {
  return (
    <div>
        <div className=' flex justify-center py-6 items-center'>
            <img src='/images/seating.png' alt='' className='w-[93vw] rounded-2xl border-[2px] border-[white] border-[solid]'/>
        </div>
        <div className='py-[15vh] px-[16vw] flex flex-col items-center relative'>
            <h1 className='font-Bowlby text-[#E9E3DC] flex justify-center image items-center font-normal leading-[1em] text-[5vw] text-center uppercase'>order online or come visit us today</h1>
            <button className='bg-[#D1EF53] mt-12 text-[1.5vw] font-Bowlby text-[#1E1E1E] font-normal border-[none] uppercase py-5 px-8'>get started</button>
        </div>
    </div>
  )
}

export default GetStarted