import React from 'react'
import { IoIosSearch } from 'react-icons/Io'

const Input = (props) => {
  return (
    <div className=" top-0 py-6 px-4 bg-transparent z-10 block">
      <div className="relative block">
        <div className="absolute top-0 bottom-0 left-4 flex items-center border-0">
          <IoIosSearch color={`${props.mode ? 'white' : 'black'}`} />
        </div>
        <input
          onChange={(event) => props.setFilterText(event.target.value)}
          className={`w-full m-0 pl-[52px] leading-none shadow border-0 appearance-none outline-0 rounded-md h-[40px] ${
            props.mode ? 'bg-[#2f363d] text-white' : 'bg-white'
          }`}
          type="search"
          placeholder={props.placeholder ? props.placeholder : 'Search icons'}
        />
      </div>
    </div>
  )
}
export default Input
