import * as React from "react";

const SvgAlignJustify = ({ title, titleId, ...props }) => (
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
    className="align-justify_svg__feather align-justify_svg__feather-align-justify"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M21 10H3M21 6H3M21 14H3M21 18H3" />
  </svg>
);

export default SvgAlignJustify;
