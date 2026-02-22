import React from 'react'

function Card(props) {
    return (
        <div className="w-[350px] bg-[#1f2937]/50  border text-center border-[#475569]/30 p-[24px] hover:scale-105  rounded-xl transition-all duration-300 card-shadow hover:border-indigo-500">
            <h1 className='text-[48px] text-[#8385d5]'><i className={` ${props.icon}`}></i></h1>
            <p className='text-[36px] font-semibold  bg-gradient-to-r from-indigo-400 via-indigo-500 to-cyan-500 bg-clip-text text-transparent'>{props.content}</p>
            <p className='text-[16px] text-[#94a3b8]  '>{props.seconderyContent}</p>
        </div>

    )
}

export default Card