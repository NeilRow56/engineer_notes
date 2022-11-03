import React from 'react'
import DashFooter from './DashFooter'
import DashHeader from './DashHeader'

const DashLayout = ({ children }) => {
  return (
    <>
    
    <div className='container mx-auto'>
      <DashHeader />
      <main>{children}</main>
      <DashFooter />
      
    </div>
    </>
  )
}

export default DashLayout