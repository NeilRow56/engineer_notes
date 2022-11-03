import Link from 'next/link'
import React from 'react'
import ClientOnly from '../components/ClientOnly'
import { FaArrowRight } from "react-icons/fa";

const Welcome = () => {

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="h-screen">
            <header className='text-white '>
                <ClientOnly><div className=''>{today}</div></ClientOnly>
                <h1 className='text-3xl font-bold border-b py-3'>Welcome!</h1>
            </header>
            <main className="h-[700px] w-full flex flex-col">
                <div className='mt-4 w-full  '>
                <div className='mt-4 mb-4  '>
                    <Link href="/dash/notes">
                <a className=''><span className='flex  items-center  '><FaArrowRight className='w-8' />
                <h3 className='ml-3'>
                    View techNotes
                </h3>
                </span></a>
                    </Link>
                </div>
                <div className='mt-4 mb-4  '>
                    <Link href="/dash/employees">
                <a className=''><span className='flex  items-center  '><FaArrowRight className='w-8' />
                <h3 className='ml-3'>
                    View User Settings
                </h3>
                </span></a>
                    </Link>
                </div>
                 
                </div>
                
            </main>
            
        </section>
    )


  return content
}

export default Welcome
