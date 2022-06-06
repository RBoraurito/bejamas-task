import React from 'react'

export const Chevron = ({width = 20, height = 13}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L10 10L18 2" stroke="black" strokeWidth="3"/>
    </svg>
  )
}
