import type { CSSProperties } from 'react'
import haruImage from './assets/haru-sit-01.png'

export type HaruCatPosition =
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

export type HaruCatProps = {
  position?: HaruCatPosition
  size?: number
  offset?: number
  zIndex?: number
  className?: string
}

export function HaruCat({
  position = 'bottom-right',
  size = 120,
  offset = 16,
  zIndex = 9999,
  className,
}: HaruCatProps) {
  const positionStyle: CSSProperties = {
    position: 'fixed',
    bottom: offset,
    zIndex,
    pointerEvents: 'none',
  }

  if (position === 'bottom-left') {
    positionStyle.left = offset
  } else if (position === 'bottom-center') {
    positionStyle.left = '50%'
    positionStyle.transform = 'translateX(-50%)'
  } else {
    positionStyle.right = offset
  }

  return (
    <span className={className} style={positionStyle}>
      <img
        src={haruImage}
        alt=""
        width={size}
        height={size}
        style={{ display: 'block' }}
      />
    </span>
  )
}
