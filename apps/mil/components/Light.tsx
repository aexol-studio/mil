import React, { useState } from 'react'
import { MdLightMode } from 'react-icons/Md'
import { MdDarkMode } from 'react-icons/Md'

const Light = (props) => {
  const OnClickHandle = () => {
    props.setMode(!props.mode)
  }
  return (
    <button
      className="inline-block m-0 text-base text-center no-underline border-0 appearance-none cursor-pointer p-1 leading-3 text-[#959da5 ] bg-transparent ml-4"
      onClick={OnClickHandle}
    >
      <div>
        {props.mode ? (
          <MdLightMode size={25} color="white" />
        ) : (
          <MdDarkMode size={25} />
        )}
      </div>
    </button>
  )
}
export default Light
