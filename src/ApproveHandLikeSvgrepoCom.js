import * as React from "react";

const SvgApproveHandLikeSvgrepoCom = ({ title, titleId, ...props }) => (
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
      d="M26.002 13H20V7.026a2.026 2.026 0 0 0-3.608-1.266L9 15h.001H9v10l3 2h12.473c.892 0 1.676-.592 1.921-1.451l2.49-8.725C29.43 14.908 27.993 13 26.002 13zM3 13h6v14H3z"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <circle cx={6} cy={23} r={1} />
  </svg>
);

export default SvgApproveHandLikeSvgrepoCom;
