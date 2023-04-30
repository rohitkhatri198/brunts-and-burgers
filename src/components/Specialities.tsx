import React from 'react'

function Specialities() {
  return (
    <div>
        <div className='flex justify-between mx-8 py-12 items-center'>
            <div className='relative'>
                <img src='/images/fries.png' alt='' className='w-[45vw] border-[2px] border-white rounded-3xl'/>

                <div className='bg-[#1e1e1e] absolute bottom-[3vh] left-[1vw] px-12 py-10 rounded-3xl uppercase font-Bowlby'>
                    <h1 className='text-white text-[2vw] w-[20vw] mb-4 leading-[1em] '> salt & Vinegar french fries</h1>
                    <span className='text-[#B3A0CD] '>order online</span>
                </div>
            </div>
            <div className='relative'>
                <img src='/images/burger.png' alt='' className='w-[45vw] border-[2px] border-white rounded-3xl'/>

                <div className='bg-[#1e1e1e] absolute bottom-[3vh] left-[1vw] px-12 py-10 rounded-3xl uppercase font-Bowlby'>
                    <h1 className='text-white text-[2vw] w-[20vw] mb-4 leading-[1em] '> crispy chicken sandwich</h1>
                    <span className='text-[#B3A0CD] '>order online</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Specialities