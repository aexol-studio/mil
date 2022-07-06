import * as React from "react";

const SvgCameraHipsterOnTrendSvgrepoCom = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 -10.5 56 56"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="#000" fillRule="evenodd">
      <path d="M12 9H5a1 1 0 1 0 0 2h7a1 1 0 0 0 0-2Z" />
      <path
        d="M35 9c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c-.004-6.074-4.926-10.996-11-11Zm0 20a9 9 0 1 1 9-9 9.014 9.014 0 0 1-9 9Z"
        fillRule="nonzero"
      />
      <path
        d="M35 13a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12c-.878 0-1.74-.23-2.5-.67a1.01 1.01 0 0 1-.37-1.37 1 1 0 0 1 1.37-.36c.457.261.974.399 1.5.4a1 1 0 0 1 0 2Zm0-8a3.009 3.009 0 0 0-3 3 1 1 0 0 1-2 0 5 5 0 0 1 5-5 1 1 0 0 1 0 2Z"
        fillRule="nonzero"
      />
      <path
        d="M54 5H2a2.006 2.006 0 0 0-2 2v26a2.006 2.006 0 0 0 2 2h52a2.006 2.006 0 0 0 2-2V7a2.006 2.006 0 0 0-2-2ZM4 31a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0v8Zm0-12a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0v2Zm8-6H5a3 3 0 0 1 0-6h7a3 3 0 0 1 0 6Zm23 20c-7.18 0-13-5.82-13-13S27.82 7 35 7s13 5.82 13 13c-.007 7.177-5.823 12.993-13 13Z"
        fillRule="nonzero"
      />
      <path d="M32.879.293A1 1 0 0 0 32.172 0h-8.343a1 1 0 0 0-.708.293L20.414 3h15.172L32.879.293Z" />
    </g>
  </svg>
);

export default SvgCameraHipsterOnTrendSvgrepoCom;
