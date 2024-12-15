import React, { useState } from 'react'

const Login = () => {

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("email is",email);
    console.log('password is',password);
  }
  return (
    <div className='flex w-screen h-screen items-center justify-center'>
      <div className='border-2 border-green  '>
        <form 
        onSubmit={(e)=>{
          submitHandler(e);
        }}
         className='flex flex-col items-center justify-center p-3'>
            <input 
            required
             value={email}
             onChange={(e)=>setEmail(e.target.value)} className='border-2 border-emerald text-white outline-none bg-transparent rounded-full px-3 py-3 placeholder:text-gray-400 mt-3' type="email" placeholder='Enter Your Mail' />
            <input required 
            value={password}
             onChange={(e)=>setPassword(e.target.value)} className='border-2 border-emerald text-white outline-none bg-transparent rounded-full px-3 py-3 placeholder:text-gray-400 mt-3' type="password" placeholder='Enter Password' />
            <button className="w-32 border border-gray-50 text-white bg-emerald-500 outline-none rounded-full px-7 py-3 placeholder-gray-50 mt-3">
              Log In
            </button>

        </form>
      </div>
    </div>
  )
}

export default Login