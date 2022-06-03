import React from 'react'

export const close = ({width = 22, height = 22}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L20 20" stroke="black" strokeWidth="4"/>
      <path d="M2 20L20 2" stroke="black" strokeWidth="4"/>
    </svg>
  )
}

