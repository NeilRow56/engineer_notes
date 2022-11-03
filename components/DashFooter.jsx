import React from 'react'
import { useRouter } from 'next/router';

import { FaHome } from "react-icons/fa";
import Link from 'next/link';
 
const DashFooter = () => {

    const router = useRouter()
    

    const onGoHomeClicked = () => router.push('/dash')

        let goHomeButton = null

        if (router.pathname !== '/dash' ) {  
                   goHomeButton = (
                <button
                className='primary-button'
                title="Home"
                onClick={onGoHomeClicked}
                >
                    < FaHome className='h-8 w-8 text-blue-600' />   
                </button>
            )
        }

    // router.query and router.push

    const content = (
        <footer className='flex w-full sticky bottom-0 left-0'>
            {goHomeButton}
            <div className='px-4 flex flex-row '>
                <p className='mr-5'>Current: User:</p>
            <p>Status:</p>
            
            </div>
            

        </footer>
    )
  return content
}

export default DashFooter