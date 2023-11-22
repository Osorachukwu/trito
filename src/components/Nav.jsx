import React, { useState } from 'react'
import Footer from './Footer'

function Nav() {
    const [text, setText] = useState("what");

    let ulStyle = {
        listStyleType: "none",
        backgroundColor: "green"
    };

    function handleClick() {
        setText('no')

    }


  return (
    <nav>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
      </ul>
      <div style={{
        backgroundColor: "pink", 
        textDecoration: "underLine",
        fontWeight: "bolder",
        fontSize: "50px"
        }}>
      <Footer />
      </div>

      <h1 onClick={handleClick}>{text}</h1>
    </nav>
  )
}

export default Nav