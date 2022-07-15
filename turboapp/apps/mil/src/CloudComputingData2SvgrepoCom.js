import * as React from "react";

const SvgCloudComputingData2SvgrepoCom = ({ title, titleId, ...props }) => (
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
      d="M23.995 13.089c.001-.03.005-.059.005-.089a8 8 0 0 0-8-8c-3.814 0-6.998 2.671-7.8 6.242C5.208 12.038 3 14.757 3 18a7 7 0 0 0 7 7h13a5.997 5.997 0 0 0 .995-11.911zM16 11v10"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m12 15 4-4 4 4"
    />
  </svg>
);

export default SvgCloudComputingData2SvgrepoCom;
