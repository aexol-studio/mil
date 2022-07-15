import * as React from "react";

const SvgAppBinDeleteSvgrepoCom = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 64 64"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M56 14v6c0 2.2-1.8 4-4 4v30c0 4.4-3.6 8-8 8H20c-4.4 0-8-3.6-8-8V24c-2.2 0-4-1.8-4-4v-6c0-2.2 1.8-4 4-4h10.2c.9-4.6 5-8 9.8-8s8.9 3.4 9.8 8H52c2.2 0 4 1.8 4 4z"
      fill="#785548"
    />
    <path
      d="M24 51c-1.1 0-2-.9-2-2V33c0-1.1.9-2 2-2s2 .9 2 2v16c0 1.1-.9 2-2 2zM40 51c-1.1 0-2-.9-2-2V33c0-1.1.9-2 2-2s2 .9 2 2v16c0 1.1-.9 2-2 2zM56 14v6c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4v-6c0-2.2 1.8-4 4-4h40c2.2 0 4 1.8 4 4z"
      fill="#FFC10A"
    />
  </svg>
);

export default SvgAppBinDeleteSvgrepoCom;
