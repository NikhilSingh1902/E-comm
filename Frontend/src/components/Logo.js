import React from 'react'

const Logo = ({ w, h }) => {
  return (
    <img 
      src="oneshoplogo.png" 
      className="logo" 
      alt="App Store" 
      style={{ width: w, height: h }} 
    />
  )
}

export default Logo;
