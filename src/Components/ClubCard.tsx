import * as React from 'react'
import logo from '../assets/images/logo300.png'
import clubLogo from '../assets/images/clubLogo.png'
import { Carousel, Image } from 'antd'
import { partners } from '../data'


export function ClubCard() {
  return (
    <div className="container width-limited flex columned aligned-center">
      <div style={{ perspective: 400 }}>
        <div className="club-card-wrapper">
          <span className="tracks">
            <span></span>
          </span>
          <div className="nery-logo-wrapper">
            <img className="nery-logo" src={logo} alt="clubCard" />
          </div>
          <div className="club-logo-wrapper">
            <img className="club-logo" src={clubLogo} alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}
