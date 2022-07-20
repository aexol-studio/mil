import React from 'react'

const Button = (props) => {
  return (
    <div
      className={`inline-block m-0 py-3 px-6 text-base text-center no-underline border-0 rounded-md appearance-none cursor-pointer bg-transparent shadow-[0_0_0_1px_#d1d5da] 
      ${props.mode ? 'hover:bg-black' : 'hover:bg-white'} ${
        props.mode ? 'text-white' : 'text-black'
      }`}
    >
      {props.children ? props.children : 'Download all'}
    </div>
  )
}
export default Button
