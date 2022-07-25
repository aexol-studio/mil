import React from 'react'

const Footer = (props) => {
  return (
    <div className="py-6 px-4">
      <footer className="py-4 border-t border-[#d1d5da]">
        <a
          className={`no-underline text-sm hover:underline ${
            props.mode ? 'text-white' : 'text-black'
          }`}
          target="_blank"
          href="https://aexol.com/"
        >
          Made by @aexol
        </a>
      </footer>
    </div>
  )
}
export default Footer
