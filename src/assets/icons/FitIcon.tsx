import React from 'react'
import { ColorMode } from '../../utils/ColorMode'

const FitIcon = ({ colorMode }: { colorMode?: string }) => {
  switch (colorMode) {
    case ColorMode.Light:
      return <FitIconLight />
    case ColorMode.Dark:
      return <FitIconDark />
    default:
      return <FitIconLight />
  }
}

export default FitIcon

export const FitIconLight = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_19_236)">
        <rect
          x="14.2964"
          y="21.8137"
          width="19.4444"
          height="8.19444"
          fill="#0349FE"
        />
        <ellipse
          cx="14.3888"
          cy="25.9109"
          rx="4.16667"
          ry="4.09722"
          fill="#0349FE"
        />
        <ellipse
          cx="33.6481"
          cy="25.9109"
          rx="4.16667"
          ry="4.09722"
          fill="#0349FE"
        />
        <g filter="url(#filter0_d_19_236)">
          <rect
            width="10.1712"
            height="8.05851"
            transform="matrix(0.132156 -0.991229 0.988155 0.15346 18.1852 30.2968)"
            fill="#0349FE"
          />
        </g>
        <rect
          width="30.8355"
          height="8.28141"
          transform="matrix(0.132156 -0.991229 0.988155 0.15346 17.1064 37.565)"
          fill="#0349FE"
        />
        <ellipse
          cx="21.2408"
          cy="37.9028"
          rx="4.16667"
          ry="4.09722"
          fill="#0349FE"
        />
        <g filter="url(#filter1_d_19_236)">
          <rect
            x="20.0371"
            y="7"
            width="9.25926"
            height="8.19444"
            fill="#0349FE"
          />
        </g>
        <ellipse
          cx="38.8333"
          cy="11.1209"
          rx="4.16667"
          ry="4.09722"
          fill="#0349FE"
        />
        <ellipse
          cx="12.1667"
          cy="11.1209"
          rx="4.16667"
          ry="4.09722"
          fill="#0349FE"
        />
        <rect
          x="12.2593"
          y="7.02373"
          width="26.1111"
          height="8.19444"
          fill="#0349FE"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_19_236"
          x="6.18518"
          y="8.2148"
          width="33.3073"
          height="35.3186"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_19_236"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_19_236"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_19_236"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_19_236"
          x="10.0371"
          y="2"
          width="29.2593"
          height="28.1944"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_19_236"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_19_236"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_19_236">
          <rect
            width="35"
            height="35"
            fill="white"
            transform="translate(8 7)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export const FitIconDark = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_19_352)">
        <rect
          x="15.2964"
          y="21.8137"
          width="19.4444"
          height="8.19444"
          fill="#E9FFF9"
        />
        <ellipse
          cx="15.3888"
          cy="25.9109"
          rx="4.16667"
          ry="4.09722"
          fill="#E9FFF9"
        />
        <ellipse
          cx="34.6481"
          cy="25.9109"
          rx="4.16667"
          ry="4.09722"
          fill="#E9FFF9"
        />
        <g filter="url(#filter0_d_19_352)">
          <rect
            width="10.1712"
            height="8.05851"
            transform="matrix(0.132156 -0.991229 0.988155 0.15346 19.1852 30.2968)"
            fill="#E9FFF9"
          />
        </g>
        <rect
          width="30.8355"
          height="8.28141"
          transform="matrix(0.132156 -0.991229 0.988155 0.15346 18.1064 37.565)"
          fill="#E9FFF9"
        />
        <ellipse
          cx="22.2408"
          cy="37.9028"
          rx="4.16667"
          ry="4.09722"
          fill="#E9FFF9"
        />
        <g filter="url(#filter1_d_19_352)">
          <rect
            x="21.0371"
            y="7"
            width="9.25926"
            height="8.19444"
            fill="#E9FFF9"
          />
        </g>
        <ellipse
          cx="39.8333"
          cy="11.121"
          rx="4.16667"
          ry="4.09722"
          fill="#E9FFF9"
        />
        <ellipse
          cx="13.1667"
          cy="11.121"
          rx="4.16667"
          ry="4.09722"
          fill="#E9FFF9"
        />
        <rect
          x="13.2593"
          y="7.02374"
          width="26.1111"
          height="8.19444"
          fill="#E9FFF9"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_19_352"
          x="-2.81482"
          y="-1.78521"
          width="53.3073"
          height="55.3186"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_19_352"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_19_352"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_19_352"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_19_352"
          x="9.03711"
          y="0"
          width="33.2593"
          height="32.1944"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_19_352"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_19_352"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_19_352">
          <rect
            width="35"
            height="35"
            fill="white"
            transform="translate(8 7)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
