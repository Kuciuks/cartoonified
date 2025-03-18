import React, { useEffect, useRef, useState } from 'react'
import '../Styles/header.css'
const header = () => {

  const scrollRef = useRef(0)
  
  const handleScroll =()=>{
    const scrollPos = window.scrollY
    console.log(scrollPos, scrollRef.current);

    if (scrollPos > scrollRef.current){
      document.getElementById('header').classList.remove('unhide')
      document.getElementById('header').classList.add('hide')
    }
    else{
      document.getElementById('header').classList.remove('hide')
      document.getElementById('header').classList.add('unhide')
    }
    scrollRef.current = scrollPos
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    
    return()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])


  return (
    <div className='header-container' id='header'>
      <nav className='nav-container'>
        <ul className='nav-ul-home'>
          <li className='homepage-btn'>Home</li>
        </ul>
        <ul className='nav-ul'>
          <li className='aboutpage-btn'>About</li>
          <li className='contactpage-btn'>Contact</li>
          <li className='catalogpage-btn'>Catalog</li>
        </ul>
      </nav>
    </div>
  )
}

export default header