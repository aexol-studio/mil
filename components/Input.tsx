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
  background: linear-gradient(#f6f8fa, #f6f8fa 50%, rgba(246, 248, 250, 0));
  z-index: 1;
  display: block;
`
const UI = styled.div`
  position: relative;
  display: block;
`
const Icon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 16px;
  display: flex;
  align-items: center;
`
const Search = styled.input`
  width: 100%;
  margin: 0;
  padding: 16px;
  padding-left: 52px;
  font-size: inherit;
  line-height: 1;
  font-family: inherit;
  color: inherit;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0 0 0 / 10%), 0 1px 2px 0 rgba(0 0 0 / 6%);
  border: 0;
  appearance: none;
  outline: 0;
  border-radius: 6px;
`
const Input = (props) => {
  return (
    <Container>
      <UI>
        <Icon>
          <IoIosSearch />
        </Icon>
        <Search
          type="search"
          placeholder={props.placeholder ? props.placeholder : 'Search icons'}
        />
      </UI>
    </Container>
  )
}
export default Input
