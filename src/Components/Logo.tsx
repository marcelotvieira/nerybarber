import * as React from 'react'
import logo from '../assets/images/logo.png'


export default function Logo() {
  return (

    <div className="logo-wrapper">
      <span>
        <img src={logo} alt="logo" />
      </span>
    </div>
  )

}
