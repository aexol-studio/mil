import * as React from "react";

const SvgHeartLoveRomanticSvgrepoCom = ({ title, titleId, ...props }) => (
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
      d="M16 8.064c-2.974-2.753-7.796-2.753-10.77 0s-2.974 7.215 0 9.968L16 28l10.77-9.968c2.974-2.753 2.974-7.215 0-9.968s-7.796-2.752-10.77 0z"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
  </svg>
);

export default SvgHeartLoveRomanticSvgrepoCom;
