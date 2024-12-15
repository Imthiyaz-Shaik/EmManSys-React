import React from 'react'

const TaskList = () => {
  return (
    <div  className='mt-7 flex justify-betweeen gap-5 sscreen'>
      <div className='rounded-xl w-[45%] px-7 py-3 bg-[#e07a5f] '>
         <h2 className='text-2xl  font-semibold'>0</h2>
         <h3 className='text-3xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-[45%] px-7 py-3 bg-[#3d405b] '>
         <h2 className='text-2xl  font-semibold'>0</h2>
         <h3 className='text-3xl font-medium'>Completed</h3>
      </div>
      <div className='rounded-xl w-[45%] px-7 py-3 bg-[#81b29a] '>
         <h2 className='text-2xl  font-semibold'>0</h2>
         <h3 className='text-3xl font-medium'>Accepted</h3>
      </div>
      <div className='rounded-xl w-[45%] px-7 py-3 bg-[#5e503f] '>
         <h2 className='text-2xl  font-semibold'>0</h2>
         <h3 className='text-3xl font-medium'>Failed</h3>
      </div>
      
    </div>
  )
}

export default TaskList
