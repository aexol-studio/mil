import * as React from "react";

const SvgCallContactMultimediaSvgrepoCom = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m30 22.3-2.5-2.5c-1.3-1.3-3.5-1.3-4.8 0l-.8.8c-.5.5-1.4.5-2 0l-4.2-4.2-4.2-4.2c-.3-.3-.4-.6-.4-1s.1-.7.4-1l.9-.8c1.3-1.3 1.3-3.5 0-4.8L9.7 2C8.5.7 6.2.7 4.9 2l-.8.8c-2 2-3.1 4.6-3.1 7.5s1.1 5.5 3.1 7.5l5.1 5.1 5.1 5.1c2 2 4.7 3.1 7.5 3.1s5.5-1.1 7.5-3.1l.9-.8c.6-.6 1-1.5 1-2.4-.2-1-.5-1.9-1.2-2.5z"
      fill="#4DAF50"
    />
    <g fill="#FE9803">
      <path d="M16 5c-.5 0-1 .5-1 1s.5 1 1 1c2.5 0 4.7 1 6.4 2.6C24 11.3 25 13.5 25 16c0 .5.5 1 1 1s1-.5 1-1c0-3-1.2-5.8-3.2-7.8S19 5 16 5zM27.8 4.2C25.8 2.2 23 1 20 1c-.5 0-1 .5-1 1s.5 1 1 1c2.5 0 4.7 1 6.4 2.6C28 7.3 29 9.5 29 12c0 .5.5 1 1 1s1-.5 1-1c0-3-1.2-5.8-3.2-7.8z" />
    </g>
  </svg>
);

export default SvgCallContactMultimediaSvgrepoCom;
