import React, { useState } from 'react'

const Header = (props) => {
 

const logOutUser=()=>{
  localStorage.setItem('loggedInUser','')
  props.changeUser('')
}

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>{props.firstName}👋</span> </h1>
      <button onClick={logOutUser} className='bg-red-500 text-white text-lg font-md px-5 py-2 rounded-lg'>Log Out</button>
    </div>
  )
}

export default Header
