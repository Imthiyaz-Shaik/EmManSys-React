import React from 'react'

const CreateTask = () => {
  return (
    <div className=' p-5 mt-7 bg-[#161a1d] rounded'>
    <form className='flex flex-wrap w-full items-start justify-between '>
    <div className='w-1/2'>
    <div>
    <h3 className='text-sm mb-0.5'>Task Title</h3>
    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4' type="text" placeholder='' />
    </div>
    <div>
    <h3>Date</h3>
    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4'  type="date" />
    </div>
    <div>
    <h3>Asign to</h3>
    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4'  type="text" placeholder='Employee Name' />
    </div>
    <div>
    <h3>Category</h3>
    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4'  type="text" placeholder='Design,Dev,etc' />
    </div>
    </div>
    <div className='flex flex-col w-2/5'>
    <h3>Description</h3>
    <textarea className='text-sm py-1 px-2 h-44 w-full rounded outline-none bg-transparent border-[1px] mb-4'  name="" id=""></textarea>
    <button className='bg-emerald-400 py-1 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
    </div>
       
   </form>
  </div>
  )
}

export default CreateTask
