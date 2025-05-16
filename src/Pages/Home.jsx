import React, { useRef, useState, useEffect } from 'react'
import Hero from '../PageSections/HomeSections/Hero'
import ProductCatalog from '../PageSections/HomeSections/ProductCatalog'
import ProductStory from '../PageSections/HomeSections/ProductStory'
import Delivery from '../PageSections/HomeSections/Delivery'
import Delivery_1 from '../PageSections/HomeSections/Delivery_1'
import Delivery_2 from '../PageSections/HomeSections/Delivery_2'
import Delivery_3 from '../PageSections/HomeSections/Delivery_3'
import '../Styles/homepage.css'

const Home = () => {

  const page_list = [Delivery, Delivery_1, Delivery_2, Delivery_3]
  const [indexState, setIndexState] = useState(0)


  const handleToggle = () =>{
    setIndexState(prev => prev + 1)
  }

  const handleToggleBack = () =>{
    setIndexState(prev => prev - 1)
  }

  const DeliveryComponent = page_list[indexState]


  const handleCheckout = ()=>{


    fetch('https:/checkout-session',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        items:[
          {id:1, quantity:3},
          {id:2, quantity:10}
        ]
      })
    })
    .then(res =>{
      if (res.ok) return res.json()
      //if res.ok is not ok
      return res.json().then(e=>{Promise.reject})
    }).then(({url}) => {
      window.location = url
    }).catch(e=>{
      console.log(e)
    })


  }


  return (
    <div className='homepage'>
      <div className='homepage-content-limiter'>
        <button onClick={handleCheckout}>Checkout</button>
        <Hero/>
        <ProductCatalog/>
        <ProductStory/>
        <DeliveryComponent/>
        <button onClick={handleToggle}>Continue</button>
        <button onClick={handleToggleBack}>Back</button>
      </div>
    </div>
  )
}

export default Home