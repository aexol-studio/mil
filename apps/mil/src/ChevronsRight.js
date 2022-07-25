import * as React from "react";

const SvgChevronsRight = ({ title, titleId, ...props }) => (
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
    className="chevrons-right_svg__feather chevrons-right_svg__feather-chevrons-right"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
  </svg>
);

export default SvgChevronsRight;
