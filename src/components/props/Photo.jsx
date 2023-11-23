import React from 'react'
import yourPhoto from '../../assets/photo1.jpg'

function Photo(props) {
  return (
    <div>
        <img src={yourPhoto} alt="" style={{width: '100%'}}/>
        
    </div>
  )
}

export default Photo