import * as React from "react";

const SvgChevronsDown = ({ title, titleId, ...props }) => (
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
    className="chevrons-down_svg__feather chevrons-down_svg__feather-chevrons-down"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m7 13 5 5 5-5M7 6l5 5 5-5" />
  </svg>
);

export default SvgChevronsDown;
