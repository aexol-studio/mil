import React from 'react'

const Icon = (props) => {
  return (
    <div className="p-2 block w-[210px] h-[140px]">
      <div className="w-full h-full pb-4 flex flex-col items-center cursor-pointer bg-white rounded-md shadow-md outline-0 ">
        <div className="flex-auto flex items-center justify-center">
          {props.children}
        </div>
        <span className="flex-initial text-sm px-3.5 text-center break-words">
          {props.title}
        </span>
      </div>
    </div>
  )
}
export default Icon
