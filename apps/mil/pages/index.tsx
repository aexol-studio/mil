import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Light from '../components/Light'
import Link from '../components/Link'
import List from '../components/List'
import Icon from '../components/Icon'
import Footer from '../components/Footer'
import { useWindowSize } from '../components/useWindowSize'
const Home = () => {
  const [mode, setMode] = useState(false)
  const [size, setSize] = useState(30)
  const [strokeWidth, setStrokeWidth] = useState(2)
  const [ColorIcon, setColorIcon] = useState('')
  const [FilterText, setFilterText] = useState('')
  const { width } = useWindowSize()
  const color = 'black'
  const ColorHandle = (event) => {
    setColorIcon(event.target.value)
  }
  const nameList = List.filter((icon) => {
    return icon.title.toLowerCase().indexOf(FilterText.toLowerCase()) >= 0
  }).map((icon, index) => {
    return (
      <Icon
        key={index}
        title={icon.title}
        svg={icon.svg}
        fontSize={size}
        strokeWidth={strokeWidth}
        color={ColorIcon}
        mode={mode}
      >
        {icon.icon}
      </Icon>
    )
  })
  const Resetfcn = (event) => {
    event.preventDefault()
    setSize(30)
    setStrokeWidth(2)
  }
  return (
    <div
      className={`min-h-screen w-screen p-10 flex flex-col  ${
        mode ? 'bg-[#24292e]' : 'bg-[#f6f8fa]'
      }`}
    >
      <div className="flex justify-between">
        <a
          href="http://localhost:3000/"
          className={`${
            mode ? 'text-white' : 'text-black'
          } hover:underline decoration-1 ${width < 400 ? 'text-xs' : ''}`}
        >
          Modern-icons-library
        </a>
        <div className="flex justify-center items-center">
          <a
            href="https://github.com/aexol-studio/mil"
            className={`${
              mode ? 'text-white' : 'text-black'
            } hover:underline decoration-1 ${width < 400 ? 'text-xs' : ''}`}
          >
            GitHub
          </a>
          <Light mode={mode} setMode={setMode} />
        </div>
      </div>
      <div className="flex flex-col text-center mt-24 justify-center items-center mb-20">
        <h1
          className={`mt-0 mb-6  font-normal ${
            mode ? 'text-white' : 'text-black'
          } ${width < 400 ? 'text-base' : 'text-2xl'}`}
        >
          Simply beautiful open source icons
        </h1>
        <div
          className={`flex justify-between ${width < 400 ? 'flex-col' : ''}`}
        >
          <div className={`mr-5 ${width < 400 ? 'm-5' : ''}`}>
            <Link>Get started</Link>
          </div>
          <div className={`mr-5 ${width < 400 ? 'm-5' : ''}`}>
            <Button mode={mode}></Button>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-between items-baseline ${
          width < 900 ? 'flex-col-reverse' : ''
        }`}
      >
        <div className={` flex flex-col ${width < 900 ? 'w-full' : 'w-[79%]'}`}>
          <Input mode={mode} setFilterText={setFilterText} value={FilterText} />
          <div className="flex flex-wrap justify-center">{nameList}</div>
          <Footer mode={mode} />
        </div>

        <div
          className={`flex  flex-col ${width < 900 ? 'w-full' : ''} ${
            width > 900 ? 'w-[20%]' : ''
          }`}
        >
          <div className="flex justify-between mb-5">
            <h2
              className={`${
                mode ? 'text-white' : 'text-black'
              } m-0 text-xl font-medium`}
            >
              Customize
            </h2>
            <button
              className={`${mode ? 'text-white' : 'text-black'}`}
              onClick={Resetfcn}
            >
              Reset
            </button>
          </div>
          <div className="flex flex-col m-5">
            <p className={`${mode ? 'text-white' : 'text-black'}`}>Size</p>
            <div className="flex justify-between">
              <input
                type="range"
                min="12"
                max="88"
                step="4"
                value={size}
                onChange={(event) => setSize(+event.target.value)}
                className={` m-2 h-1 cursor-pointer appearance-none bg-[#b1b3b5] opacity-60 ${
                  width > 900 ? 'w-[80%] ' : 'w-[90%]'
                }`}
              />
              <p
                className={`${mode ? 'text-white' : 'text-black'}   ${
                  width < 600 ? 'text-xs font-thin' : 'text-sm'
                }`}
              >
                {size} px
              </p>
            </div>
          </div>
          <div className="flex flex-col m-5">
            <p className={`${mode ? 'text-white' : 'text-black'} `}>
              Stroke width
            </p>
            <div className="flex justify-between">
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.5"
                onChange={(event) => setStrokeWidth(+event.target.value)}
                className={`w-[80%] m-2 h-1 cursor-pointer appearance-none bg-[#b1b3b5] opacity-60 ${
                  width > 900 ? 'w-[80%] ' : 'w-[90%]'
                }`}
                value={strokeWidth}
              />
              <p
                className={`${mode ? 'text-white' : 'text-black'}  ${
                  width < 600 ? 'text-xs font-thin' : 'text-sm'
                }`}
              >
                {strokeWidth} px
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <p className={`${mode ? 'text-white' : 'text-black'}`}>Color</p>
            <div className="w-full flex justify-evenly">
              <input
                onChange={ColorHandle}
                value={ColorIcon}
                type="text"
                className={`m-0 border-2 px-3 outline-0  rounded-md p-2 ${
                  width < 900 ? 'w-[80%]' : ''
                } ${
                  mode
                    ? 'bg-[#2f363d] text-white border-[#444d56]'
                    : 'bg-white border-[#d1d5da]'
                }`}
              />
              <div
                className={` w-[50px] h-[50px] rounded-md `}
                style={{
                  backgroundColor: `${ColorIcon ? ColorIcon : color}`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
