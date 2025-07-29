import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className="left">
        <div className="title">
          <h1>Shopping Mall</h1>
          </div>
        
        
      </div>
      <div className="center">
        <ul>
          <li>women</li>
          <li>Mens</li>
          <li>Kids</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder='Search for ...' />
        
      </div>
      <div className="right">
        <div className="signin">
          Sigin / Signup
        </div>
        <div className="cart">Cart</div>
      </div>
      
    </div>
  )
}

export default Header