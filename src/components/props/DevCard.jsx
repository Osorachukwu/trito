import React from 'react'
import Photo from './Photo'
import Skills from './Skills'

function DevCard() {
  return (
    <div style={{border: '3px solid black', width: '300px'}}>
        <Photo />

        <Skills text='html' emoji='🌞' theirClass='html'/>

        <Skills text='css' emoji='🚩' theirClass='css'/>

    </div>
  )
}

export default DevCard