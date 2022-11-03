import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';

const DashHeader = () => {
    const router = useRouter()
  return (
    <nav className="flex h-12 items-center px-4 justify-between shadow-md mb-5">
         <Link href="/">
              <a className={router.pathname == '/dash/notes' ? "active " : "not_active" }  > techNotes</a>
        </Link>
         <div className='flex items-center'>
                <div className='flex items-center px-2 py-1'>
                
              <Link href="/">
                <a className={router.pathname == '/dash' ? "active" : "not_active" } > 
                Home
               
                </a>
              </Link>
             
              
              
              </div>
              </div>
        
    </nav>
    
  )
}

export default DashHeader