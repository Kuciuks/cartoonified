import React from 'react'
import Hero from '../PageSections/HomeSections/Hero'
import ProductCatalog from '../PageSections/HomeSections/ProductCatalog'
import ProductStory from '../PageSections/HomeSections/ProductStory'
import Delivery from '../PageSections/HomeSections/Delivery'

const Home = () => {
  return (
    <div className='homepage'>
      <Hero/>
      <ProductCatalog/>
      <ProductStory/>
      <Delivery/>
    </div>
  )
}

export default Home