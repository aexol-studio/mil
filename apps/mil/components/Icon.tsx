import React from 'react'
const Icon = (props) => {
  return (
    <a
      className="p-2 block w-[210px] h-[140px]"
      download={`${props.title}.svg`}
      href={props.svg}
    >
      <div
        className={`w-full h-full pb-4 flex flex-col items-center cursor-pointer  rounded-md shadow-md outline-0 ${
          props.mode ? 'bg-[#2f363d]' : 'bg-white'
        }`}
      >
        <div
          className={`flex-auto flex items-center justify-center`}
          style={{
            fontSize: `${props.fontSize}px`,
            color: `${props.color ? props.color : ''}`,
          }}
        >
          {props.children}
        </div>
        <span
          className={`flex-initial text-sm px-3.5 text-center break-words ${
            props.mode ? 'text-white' : 'text-black'
          }`}
        >
          {props.title}
        </span>
      </div>
    </a>
  )
}
export default Icon
