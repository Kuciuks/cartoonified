import React from 'react'
import '../../Styles/delivery.css'

const Delivery = () => {
  return (
    <div className='section order-container'>
      <div className='instruction-header'>Unallocated space</div>
      <div className='instructions'>
        <span>Make your selections!</span>
        <div className='ins-blt'>
          <span className='ins-blt-txt-1'>In order for us to be able to produce the best quality product for you please ensure that the uploaded picture(s) are:</span>
          <span className='ins-blt-txt-2'>• Good quality picture</span>
          <span className='ins-blt-txt-3'>• Upload using JPEG or PNG format</span>
          <span className='ins-blt-txt-4'>• Add a detailed description</span>
        </div>
        <div className='upload'>
          <div className='btn-upload'>Upload</div>
          <span className='btn-txt'>Select and upload your picture(s) here</span>
        </div>
        <div className='more-instructions'>
          <span className='ins-blt-txt-5'>Let us know what you want us to change or remove. Being as detailed and giving the most context helps us deliver the best version of the product. For example explain what is happening in the picture, what is the occasion for your order - birthday, etc.</span>
          <img className='ins-image'/>
        </div>
      </div>
    </div>
  )
}

export default Delivery