import React from 'react';
import  './Button.css'

function Button({children}) {
  return (
    <div>
      <button className='button'>{children}</button>
    </div>
  )
}

export default Button