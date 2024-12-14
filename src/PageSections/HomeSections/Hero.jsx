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
          <img className='hero-img-1' src='https://images.rawpixel.com/image_social_portrait/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL2xyL3djYmZwcjlmcjYtaW1hZ2UuanBn.jpg'/>
        </div>
        <div className='swipe'>Swipe</div>
    </div>
  )
}

export default Hero