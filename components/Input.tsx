import React from 'react'
import styled from 'styled-components'
import { IoIosSearch } from 'react-icons/Io'
const Container = styled.div`
  position: sticky;
  top: 0;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 16px;
  padding-right: 16px;
  background: transparent;
  z-index: 1;
  display: block;
`

const Input = (props) => {
  return (
    <div className="sticky top-0 py-6 px-4 bg-transparent z-10 block">
      <div className="relative block">
        <div className="absolute top-0 bottom-0 left-4 flex items-center border-0">
          <IoIosSearch />
        </div>
        <input
          className="w-full m-0 pl-[52px] leading-none shadow border-0 appearance-none outline-0 rounded-md"
          type="search"
          placeholder={props.placeholder ? props.placeholder : 'Search icons'}
        />
      </div>
    </div>
  )
}
export default Input
