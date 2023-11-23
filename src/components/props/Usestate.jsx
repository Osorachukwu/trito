import React, { useState } from 'react'

function Usestate() {

    const [initialNum, setInitialNum] = useState({});

  return (
    <div>
        <h1> Incraese this number {initialNum}</h1>

        <button onClick={()=> setInitialNum()}>Click</button>

    </div>
  )
}

export default Usestate