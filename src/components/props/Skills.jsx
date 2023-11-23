import React from 'react'

function Skills({theirClass, text, emoji}) {
  return (
    <div className={theirClass}>

        {text} {emoji} 
        
    </div>
  )
}

export default Skills