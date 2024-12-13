import React from 'react'
import '../../Styles/hero.css'

const Hero = () => {
  return (
    <div className='section hero-section'>
        <div className='hero-text'>
          <div>
            <h1>Have You Ever Been Cartoonified?</h1>
          </div>
        </div>
        <div className='hero-image'>
            <picture>
              <img src='D:\Main\projects\cartoonified\src\assets\cat_placeholder.png'/>
            </picture>
        </div>
        <div className='swipe'>Swipe</div>
    </div>
  )
}

export default Hero