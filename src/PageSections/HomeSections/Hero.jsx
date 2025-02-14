import React from 'react'
import '../../Styles/hero.css'
import placeholder from '../../assets/image.png'















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
            <img className='hero-img-1' src={placeholder}/>
          </div>
          <div className='product-showcase'>
              <div className='showcase showcase-1'>1</div>
              <div className='showcase showcase-2'>2</div>
              <div className='showcase showcase-3'>3</div>
              <div className='showcase showcase-4'>4</div>
          </div>
          
        </div>
    </div>
  )
}

export default Hero