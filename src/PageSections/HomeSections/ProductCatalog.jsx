import React from 'react'
import '../../Styles/carousel.css'
import starpic from '../../assets/favourite.png'

const ProductCatalog = () => {
  return (
    <div className='section catalog-container'>


      <div className='item item-1'>
        <div className='pic pic-container-1'>
          <img/>
        </div>

        <img className='star-img' src={starpic}/>

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

        <span className='gap'></span>

        <div className='pic pic-container-2'>
          <img/>
        </div>
      </div>


      <div className='item item-3'>
        <div className='pic pic-container-3'>
          <img/>
        </div>
        <span className='gap'></span>

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

        <span className='gap'></span>

        <div className='pic pic-container-4'>
          <img/>
        </div>
      </div>
      
    </div>
  )
}

export default ProductCatalog