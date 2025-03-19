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
          <span className='ins-blt-txt-5'></span>
          <img className='ins-image'/>
        </div>
      </div>
    </div>
  )
}

export default Delivery