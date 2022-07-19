import React, { useState } from 'react'
import styled from 'styled-components'
import { MdLightMode } from 'react-icons/Md'
import { MdDarkMode } from 'react-icons/Md'

const Button = styled.button`
  display: inline-block;
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  font-family: inherit;
  text-align: center;
  text-decoration: none;
  border: 0;
  border-radius: 6px;
  appearance: none;
  cursor: pointer;
  padding: 4px;
  line-height: 1;
  color: #959da5;
  background-color: transparent;
  margin-left: 16px;
`

const Light = (props) => {
  const [mode, setMode] = useState(false)

  const OnClickHandle = () => {
    setMode(!mode)
  }
  return (
    <Button onClick={OnClickHandle}>
      <div>{mode ? <MdLightMode size={30} /> : <MdDarkMode size={30} />}</div>
    </Button>
  )
}
export default Light
