import * as React from "react";

const SvgBluetooth = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="bluetooth_svg__feather bluetooth_svg__feather-bluetooth"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m6.5 6.5 11 11L12 23V1l5.5 5.5-11 11" />
  </svg>
);

export default SvgBluetooth;
