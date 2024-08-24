import React from 'react'

function imagebanner() {
  return (
    <div className='flex'>
         <div className='flex-shrink-0 ' >
          <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_banner_copy_8.jpg?format=webp&w=1366&dpr=1.0" alt="no image found" />
          </div  >
          <div className='flex-shrink-0 '>
          <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/OVERSIZED_TSHIRT-_HOMEPAGE.jpg?format=webp&w=1366&dpr=1.0" alt="" />
          </div >
          <div className='flex-shrink-0 '>
          <img className='w-full h-full' src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/8205220240812143714.jpg?format=webp&w=1366&dpr=1.0" alt="" />
          </div>
    </div>

  )
}

export default imagebanner