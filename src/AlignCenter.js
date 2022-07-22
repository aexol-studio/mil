import * as React from "react";

const SvgAlignCenter = ({ title, titleId, ...props }) => (
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
    className="align-center_svg__feather align-center_svg__feather-align-center"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18 10H6M21 6H3M21 14H3M18 18H6" />
  </svg>
);

export default SvgAlignCenter;
