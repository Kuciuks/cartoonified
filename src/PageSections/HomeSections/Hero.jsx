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
        <div className='product-showcase-container'>
          <div className='hero-image'>
            <img className='hero-img-1' src='https://images.rawpixel.com/image_social_portrait/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL2xyL3djYmZwcjlmcjYtaW1hZ2UuanBn.jpg'/>
          </div>
          <div className='product-showcase'>
            <ul>
              <li className='showcase showcase-1'>1</li>
              <li className='showcase showcase-2'>2</li>
              <li className='showcase showcase-3'>3</li>
              <li className='showcase showcase-4'>4</li>
            </ul>
          </div>
          
        </div>
    </div>
  )
}

export default Hero