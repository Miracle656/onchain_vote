import React from 'react'
import './Header.css'
import { FaWallet } from "react-icons/fa";

function Header() {
  return (
    <>
    <header>
        <h1>Vote Onchain</h1>
        <nav className='navbar'>
            <ul>
                <li>Home</li>
                <li>Parties</li>
            </ul>
            <button style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '.7rem',
              width: '10rem'
            }}><FaWallet style={
              {
                paddingRight: '.3rem'
              }
            } />connect wallet</button>
        </nav>
    </header>
    </>
  )
}

export default Header