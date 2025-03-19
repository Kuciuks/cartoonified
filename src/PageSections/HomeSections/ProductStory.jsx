import React from 'react'
import '../../Styles/productstory.css'

const ProductStory = () => {
  return (
    <div className='section how-to-container'>
      <div className='ht how-to-1'>Unallocated space</div>
      <div className='ht how-to-2'>
        <span className='htxt ht-txt-1'>All we need is...</span>
        <span className='htxt ht-txt-2'>A moment captured in a form of a picture</span>
        <span className='htxt ht-txt-3'>Your pick from the design catalog</span>
        <span className='htxt ht-txt-4'>Amd a description for adjustments</span>
      </div>
      <div className='ht how-to-3'>
        <span className='img-txt-1'>Next, we let our artists do the magic!</span>
        <img className='txt-image'/>
        <span className='img-txt-2'>All hand-drawn with no Artificial sweeteners used!</span>
      </div>

    </div>
  )
}

export default ProductStory