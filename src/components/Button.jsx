import React from 'react'

function Button() {
    function alertSomething() {
        alert("HowaU")
    }
    let text = "text";

  return (

    <button onClick={()=> {
        text = 'notText'

    }}>
        Click 
    </button>
  )
}

export default Button