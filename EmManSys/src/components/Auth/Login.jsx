import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')

    const submitHandler=(e)=>{
        e.preventDefault();
        handleLogin(email,password);
        console.log('email is',email);
        console.log('password is',password);

        setEmail('');
        setPassword('');

    }
  return (
    <div className='flex h-screen w-screen  items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20'>
          <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col items-center justify-center' >
            <input
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}} required className='border-2 border-emerald 600 rounded-full text-xl text-white outline-none bg-transparent py-3 px-5 placeholder:text-gray-400' type="email" placeholder='Enter Your Mail' />
            <input
             value={password}
             onChange={(e)=>{setPassword(e.target.value)}} required className='border-2 border-emerald 600 rounded-full text-xl text-white outline-none bg-transparent mt-3 py-3 px-5  placeholder:text-gray-400' type="password" placeholder='Enter Password' />
            <button className='border-2 border-white bg-emerald-600 rounded-full text-xl text-white outline-none   py-3 px-5  mt-5  placeholder:text-white'>Log In</button>
          </form>
        </div>
      
    </div>
  )
}

export default Login
