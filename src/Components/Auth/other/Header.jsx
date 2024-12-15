import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='flex items-end justify-between'>
        <h1  className='text-2xl'>Hello<br /><span className='text-3xl font-medium '>Imthiyaz👋</span></h1>
        <button className='text-lg bg-red-600 font-medium text-white px-3 py-3'>Log Out</button>
      </div>
    </div>
  )
}

export default Header
