import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Light from '../components/Light'
import Link from '../components/Link'
import List from '@/components/List'
import Icon from '@/components/Icon'
import Footer from '@/components/Footer'
const Home = () => {
  const [mode, setMode] = useState(false)
  const [size, setSize] = useState(30)
  const [strokeWidth, setStrokeWidth] = useState(2)
  const Resetfcn = (event) => {
    event.preventDefault()
    setSize(30)
    setStrokeWidth(2)
  }
  return (
    <div
      className={`h-screen w-screen p-10 flex flex-col ${
        mode ? 'bg-[#24292e]' : 'bg-[#f6f8fa]'
      }`}
    >
      <div className="flex justify-between">
        <a
          href="http://localhost:3000/"
          className={`${
            mode ? 'text-white' : 'text-black'
          } hover:underline decoration-1`}
        >
          Modern-icons-library
        </a>
        <div className="flex justify-center items-center">
          <a
            href="https://github.com/aexol-studio/mil"
            className={`${
              mode ? 'text-white' : 'text-black'
            } hover:underline decoration-1`}
          >
            GitHub
          </a>
          <Light mode={mode} setMode={setMode} />
        </div>
      </div>
      <div className="flex flex-col text-center mt-24 justify-center items-center">
        <h1
          className={`mt-0 mb-6 text-2xl font-normal ${
            mode ? 'text-white' : 'text-black'
          }`}
        >
          Simply beautiful open source icons
        </h1>
        <div className="flex justify-between">
          <div className="mr-5">
            <Link></Link>
          </div>
          <div className="mr-5">
            <Button mode={mode}></Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-baseline">
        <div className="w-[79%] flex flex-col">
          <Input mode={mode} />
          <div className="flex flex-wrap">
            {List.map((icon, index) => {
              return (
                <Icon
                  key={index}
                  title={icon.title}
                  svg={icon.svg}
                  fontSize={size}
                  strokeWidth={strokeWidth}
                >
                  {icon.icon}
                </Icon>
              )
            })}
          </div>
          <Footer mode={mode} />
        </div>

        <div className="flex w-[20%] flex-col ">
          <div className="flex justify-between">
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
          <div className="flex flex-col ">
            <p className={`${mode ? 'text-white' : 'text-black'}`}>Size</p>
            <div className="flex justify-between">
              <input
                type="range"
                min="12"
                max="88"
                step="4"
                value={size}
                onChange={(event) => setSize(+event.target.value)}
                className="w-[80%]"
              />
              <p className={`${mode ? 'text-white' : 'text-black'} text-sm`}>
                {size} px
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
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
                className="w-[80%]"
                value={strokeWidth}
              />
              <p className={`${mode ? 'text-white' : 'text-black'} text-sm`}>
                {strokeWidth} px
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <p className={`${mode ? 'text-white' : 'text-black'}`}>Color</p>
            <input
              type="text"
              className={`m-0 border-2 px-3 outline-0  rounded-md p-2 ${
                mode
                  ? 'bg-[#2f363d] text-white border-[#444d56]'
                  : 'bg-white border-[#d1d5da]'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
