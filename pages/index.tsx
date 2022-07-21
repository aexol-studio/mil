import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Light from '../components/Light'
import Link from '../components/Link'
import List from '@/components/List'
import Icon from '@/components/Icon'
const Home = () => {
  const [mode, setMode] = useState(false)
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
      <div className="flex justify-between">
        <div className="w-[80%]">
          <Input mode={mode} />
          <div className="flex flex-wrap">
            {List.map((icon, index) => {
              return (
                <Icon key={index} title={icon.title}>
                  {icon.icon}
                </Icon>
              )
            })}
          </div>
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
            <button className={`${mode ? 'text-white' : 'text-black'}`}>
              Reset
            </button>
          </div>
          <div className="flex flex-col ">
            <p className={`${mode ? 'text-white' : 'text-black'}`}>Size</p>
            <input type="range" min="12" max="100" step="4" />
          </div>
          <div className="flex flex-col ">
            <p className={`${mode ? 'text-white' : 'text-black'}`}>
              Stroke width
            </p>
            <input type="range" min="0.5" max="3" step="0.5" />
          </div>
          <div className="flex flex-col ">
            <p className={`${mode ? 'text-white' : 'text-black'}`}>Color</p>
            <input
              type="text"
              className="m-0 border-2 px-3 bg-white border-[#d1d5da] rounded-md p-2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
