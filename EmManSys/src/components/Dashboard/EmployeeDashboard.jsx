import React from 'react'
import Header from '../others/Header'
import TaskNumbers from '../others/TaskNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div>
      <div className='p-10 bg-[ICICIC] h-screen'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskNumbers data={props.data}/>
        <TaskList data={props.data}/>
      </div>
    </div>
  )
}

export default EmployeeDashboard
