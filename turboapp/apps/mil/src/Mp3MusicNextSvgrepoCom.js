import * as React from "react";

const SvgMp3MusicNextSvgrepoCom = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <style>{".mp3-music-next-svgrepo-com_svg__cls-2{fill:#2e3192}"}</style>
    </defs>
    <g data-name={1} id="mp3-music-next-svgrepo-com_svg___01">
      <circle
        cx={16}
        cy={16}
        r={13}
        style={{
          fill: "#f2f2f2",
        }}
      />
      <path
        className="mp3-music-next-svgrepo-com_svg__cls-2"
        d="M16 30a14 14 0 1 1 14-14 1 1 0 0 1-2 0 12 12 0 1 0-.52 3.52 1 1 0 1 1 1.91.58A13.92 13.92 0 0 1 16 30Z"
      />
      <path
        style={{
          fill: "#3fa9f5",
        }}
        d="M13 11.5v9l6-4.5-6-4.5z"
      />
      <path
        className="mp3-music-next-svgrepo-com_svg__cls-2"
        d="M13 21.5a.91.91 0 0 1-.45-.11 1 1 0 0 1-.55-.89v-9a1 1 0 0 1 .55-.89 1 1 0 0 1 1 .09l6 4.5a1 1 0 0 1 0 1.6l-6 4.5a1 1 0 0 1-.55.2Zm1-8v5l3.33-2.5Z"
      />
      <path
        className="mp3-music-next-svgrepo-com_svg__cls-2"
        d="M19 21a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1Z"
      />
    </g>
  </svg>
);

export default SvgMp3MusicNextSvgrepoCom;
