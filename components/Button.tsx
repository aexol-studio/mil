import React from 'react'
import styled from 'styled-components'
const Container = styled.button`
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
  border: 0;
  border-radius: 6px;
  appearance: none;
  cursor: pointer;
  color: #2f363d;
  background-color: transparent;
  box-shadow: 0 0 0 1px #d1d5da;
  &:hover {
    background-color: #fff;
  }
`
const Button = (props) => {
  return (
    <Container>{props.children ? props.children : 'Download all'}</Container>
  )
}
export default Button
