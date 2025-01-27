import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 w-[280px] bg-blue-600 h-full rounded-xl '>
            <div className='flex justify-between items-center  m-2 '>
                <h3 className='bg-emerald-400 text-sm px-3  py-1 rounded font-semibold'>{data.category}</h3>
                <h4> {data.taskDate}</h4>
            </div>

            <div className=' text-sm px-3  py-1 rounded font-semibold'>
            <h2 className='mt-2 text-xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription} </p>
            </div>
            <div className='flex justify-around mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm m-1 rounded'>Accept Task</button>
                
            </div>
      </div>
  )
}

export default NewTask
