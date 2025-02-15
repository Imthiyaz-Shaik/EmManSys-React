import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  
 const [userData,setUserData]= useContext(AuthContext)

  const [taskTitle,setTaskTitle]=useState('')
  const [taskDescription,setTaskDescription]=useState('')
  const [taskDate,setTaskDate]=useState('')
  const [assignTo,setAssignTo]=useState('')
  const [category,setCategory]=useState('')
  
 const [newTask,setNewTask]=useState({})

  const submitHandler =(e)=>{
    e.preventDefault()
    setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})
    
    const data= userData

    data.forEach(function(elem){
      if(assignTo==elem.firstName){
       elem.tasks.push(newTask)
      elem.taskCount.newTask = elem.taskCount.newTask + 1
      }
    })
    setUserData(data)

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')

  }
  return (
    <div className='p-5 bg-[#ICICIC] mt-7 rounded'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} 
        className='flex flex-wrap items-start justify-between'>
        <div className='w-1/2'>
          <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
          <input value={taskTitle}
          onChange={(e)=>{
            setTaskTitle(e.target.value)
          }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Make A UI Design' />
          </div>
           <div>
           <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
           <input value={taskDate}
          onChange={(e)=>{
            setTaskDate(e.target.value)
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="date" />
           </div>
           <div>
           <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
           <input value={assignTo}
          onChange={(e)=>{
            setAssignTo(e.target.value)
          }}
           className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Employee Name' />
           </div>
           <div>
           <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
           <input value={category}
          onChange={(e)=>{
            setCategory(e.target.value)
          }}
           className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Design,Dev etc'/>
           </div>
        </div>

            <div className='w-1/2 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea value={taskDescription}
          onChange={(e)=>{
            setTaskDescription(e.target.value)
          }} className='text-sm h-44 w-full py-2 px-4 w-4/5 rounded outline-none bg-transparent border-[1px]' name="" id="" cols="30" rows="10"></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-650 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </div>
           
        </form>
      </div>
  )
}

export default CreateTask
