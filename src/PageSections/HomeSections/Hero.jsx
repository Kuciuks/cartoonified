import React, { useEffect, useState } from 'react'
import '../../Styles/hero.css'
import placeholder from '../../assets/image.png'

const Hero = () => {

  //used to store the state if which showcase is being showned at the moment
  const [showcase, setShowcase] = useState(0)

  //used to store the showcase elements
  const [elements,setElements] = useState([])

  //grab showcase elements one they mount DOM
  useEffect(()=>{
    const elements = document.querySelectorAll('.showcase')
    setElements(elements)
  },[])


  const moveShowcase = () => {
    




    setTimeout(() => {
      
    }, 3000);
  }










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