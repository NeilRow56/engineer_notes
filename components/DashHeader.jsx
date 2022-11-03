import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';

const DashHeader = () => {
    const router = useRouter()
  return (
    <nav className="flex h-12 items-center  justify-between shadow-md mb-5">
      <div className='text-3xl mt-3'>
        <Link href="/dash">
              <a className= { router.pathname == '/dash/notes' ? "active " : "not_active" }  > techNotes</a>
        </Link>
      </div>
         
         <Link href="/dash/employees">
              <a className={router.pathname == '/dash/employees' ? "active " : "not_active" }  > Employees</a>
        </Link>
         <div className='flex items-center'>
                <div className='flex items-center px-2 py-1'>
                
              <Link href="/dash">
                <a className={router.pathname == '/dash' ? "active" : "not_active" } > 
                Dash Home
               
                </a>
              </Link>
              <Link href="/">
                <a className={router.pathname == '/' ? "active" : "not_active" } > 
                Home
               
                </a>
              </Link>
             
              
              
              </div>
              </div>
        
    </nav>
    
  )
}

export default DashHeader