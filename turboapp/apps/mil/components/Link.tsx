import React from 'react'
import { useWindowSize } from '../components/useWindowSize'
const Link = (props) => {
  const { width } = useWindowSize()
  return (
    <a
      href="https://github.com/aexol-studio/mil"
      target="_blank"
      className={` inline-block m-0 py-3 px-6 text-base font-medium text-center no-underline text-white bg-[#0066ff] border-0 rounded-md appearance-none cursor-pointer`}
    >
      {props.children ? props.children : 'Get started'}
    </a>
  )
}
export default Link
