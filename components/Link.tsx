import React from 'react'
import styled from 'styled-components'
const A = styled.a`
  display: inline-block;
  margin: 0;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 16px;
  font-weight: 500;
  font-family: inherit;
  line-height: inherit;
  text-align: center;
  text-decoration: none;
  color: white;
  background-color: #0066ff;
  border: 0;
  border-radius: 6px;
  appearance: none;
  cursor: pointer;
  &:after {
    box-sizing: initial;
  }
  &:before {
    box-sizing: initial;
  }
`
const Link = (props) => {
  return (
    <A
      href="https://github.com/aexol-studio/mil"
      target="_blank"
      className="inline-block m-0 py-3 px-6 text-base font-medium text-center no-underline text-white bg-[#0066ff] border-0 rounded-md appearance-none cursor-pointer"
    >
      {props.children ? props.children : 'Get started'}
    </A>
  )
}
export default Link
