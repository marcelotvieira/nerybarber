import * as React from 'react'
import AboutComponent, { AboutVariant } from '../Components/AboutComponent'

export default function About() {
  return (
    <div className="page margedTop">
      <AboutComponent variant={AboutVariant.full} />
    </div>
  )
}
