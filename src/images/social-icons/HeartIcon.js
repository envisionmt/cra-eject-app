import React from 'react'

const HeartIcon = props => {
  const { colors } = props
  return (
    <svg width="24px" height="28px" viewBox="0 0 24 14">
      <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
        <g
          id="Desktop---PDP-Copy"
          transform="translate(-1192.000000, -483.000000)"
        >
          <g id="Group-9" transform="translate(1188.000000, 479.000000)">
            <path
              d="M19.5454545,5 C17.6363636,5 16,5.9952381 15,7.44285714 C14,5.9952381 12.3636364,5 10.4545455,5 C7.45454545,5 5,7.44285714 5,10.4285714 C5,15.8571429 15,24 15,24 C15,24 25,15.8571429 25,10.4285714 C25,7.44285714 22.5454545,5 19.5454545,5 Z"
              id="Shape"
              stroke={colors.stroke}
              fill={colors.fill}
              strokeWidth="1.20000005"
              strokeLinecap="square"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default HeartIcon
