import React from 'react'
import Header from '../other/Header.jsx' 
  import TaskListSections from '../other/TaskListSections.jsx'
import TaskList from '../TaskList/TaskList.jsx'


const EmployeeDashboard = () => {
  return (
    <div className='border1 w-screen h-screen p-10 bg-[#0a0908] border-slate-700'>
      <Header />
      <TaskListSections />
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
