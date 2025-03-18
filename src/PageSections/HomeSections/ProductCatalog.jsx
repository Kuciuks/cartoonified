import React from 'react'
import '../../Styles/carousel.css'
const ProductCatalog = () => {
  return (
    <div className='section catalog-container'>

      <div className='item item-1'>
        <div className='pic pic-container-1'>
          <div className='star'><img /></div>
        </div>
        <div className='txt text-1'>
          <span className='product-name-text'>Product Name</span>
          <span className='product-desc-text'>The description of the product</span>
        </div>
      </div>

      <div className='item item-2'>
        <div className='txt text-2'>
          <span className='product-name-text'>Product Name</span>
          <span className='product-desc-text'>The description of the product</span>
        </div>
        <div className='pic pic-container-2'>
          <div className='star'><img /></div>
        </div>
      </div>

      <div className='item item-3'>
        <div className='pic pic-container-3'>
          <div className='star'><img /></div>
        </div>
        <div className='txt text-3'>
          <span className='product-name-text'>Product Name</span>
          <span className='product-desc-text'>The description of the product</span>
        </div>
      </div>

      <div className='item item-4'>
        <div className='txt text-4'>
          <span className='product-name-text'>Product Name</span>
          <span className='product-desc-text'>The description of the product</span>
        </div>
        <div className='pic pic-container-4'>
          <div className='star'><img /></div>
        </div>
      </div>
      
    </div>
  )
}

export default ProductCatalog