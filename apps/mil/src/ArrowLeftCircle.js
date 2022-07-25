import * as React from "react";

const SvgArrowLeftCircle = ({ title, titleId, ...props }) => (
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
    className="arrow-left-circle_svg__feather arrow-left-circle_svg__feather-arrow-left-circle"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={12} cy={12} r={10} />
    <path d="m12 8-4 4 4 4M16 12H8" />
  </svg>
);

export default SvgArrowLeftCircle;
