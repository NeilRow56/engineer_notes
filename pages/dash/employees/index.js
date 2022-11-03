import React from 'react'
import EmployeesList from '../../../features/employees/EmployeeList'
import DashLayout from '../../../components/DashLayout'

const Employees = () => {
  return (
    
    <DashLayout >
      <section className='h-screen text-red-600'>
        <EmployeesList  />
      </section>
    
    </DashLayout>
    
  )
}

export default Employees