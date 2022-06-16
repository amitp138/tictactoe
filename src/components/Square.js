import React from 'react'

const Square = ({value,onClick}) => {
  return (
    <div className='square'>
        <button type='button' className='square' onClick={onClick}>{value}</button>
    </div>
  )
}

export default Square