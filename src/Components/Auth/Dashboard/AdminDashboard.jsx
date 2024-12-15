import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTasks from '../other/AllTasks'

const AdminDashboard = () => {
  return (
    <div className='w-full h-screen p-10'>
      <Header/>
       <CreateTask/>
       <AllTasks/>
    </div>
  )
}

export default AdminDashboard
