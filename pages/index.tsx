import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Light from '../components/Light'
import Link from '../components/Link'
import styled from 'styled-components'

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
          Feather
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
    </div>
  )
}
export default Home
