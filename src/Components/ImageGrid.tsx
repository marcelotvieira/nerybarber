import { Image } from 'antd'
import * as React from 'react'

export interface IImageGridProps {
  images: any[]
}

export function ImageGrid({ images }: IImageGridProps) {
  return (
    <div style={{ maxWidth: 1000, margin: 'auto' }} className="container flex wrappable justified-center pd1">
      {images.map((img, i) => (
        <Image className="about-image-grid-item" key={i} src={img} />
      ))}
    </div>
  )
}
