import * as React from "react"
const HoverDisplay = (props:any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} {...props}>
    <defs>
      <clipPath id="a">
        <path d="M0 0h50v50H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" data-name="Component 119 \u2013 11">
      <rect
        width={50}
        height={50}
        fill="#ecf2fd"
        data-name="Rectangle 27183"
        rx={4}
      />
      <path
        fill="#2061e7"
        d="M30.535 14.001H20.466c-3.278 0-4.465 1.15-4.465 4.381v14.236c0 3.231 1.187 4.383 4.465 4.383h10.057c3.289 0 4.478-1.152 4.478-4.383V18.382c0-3.231-1.189-4.381-4.466-4.381Zm-5.034 19.893a2.013 2.013 0 1 1 2.078-2.012 2.056 2.056 0 0 1-2.078 2.012Zm2.374-15.006h-4.75a.883.883 0 0 1-.891-.862.883.883 0 0 1 .891-.862h4.75a.883.883 0 0 1 .891.862.883.883 0 0 1-.891.862Z"
        data-name="vuesax/bold/mobile"
      />
    </g>
  </svg>
)
export default HoverDisplay
