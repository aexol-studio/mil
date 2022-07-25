import * as React from "react";

const SvgArchive = ({ title, titleId, ...props }) => (
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
    className="archive_svg__feather archive_svg__feather-archive"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4" />
  </svg>
);

export default SvgArchive;
