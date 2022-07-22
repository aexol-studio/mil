import * as React from "react";

const SvgAward = ({ title, titleId, ...props }) => (
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
    className="award_svg__feather award_svg__feather-award"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={12} cy={8} r={7} />
    <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
  </svg>
);

export default SvgAward;
