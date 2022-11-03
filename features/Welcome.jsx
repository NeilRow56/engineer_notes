import Link from 'next/link'
import React from 'react'
import ClientOnly from '../components/ClientOnly'

const Welcome = () => {

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="flex flex-col space-x-1 min-h-screen">
            <div className='text-red-500'>

            <ClientOnly><div className=''>{today}</div></ClientOnly>
            

            <h1>Welcome!</h1>

            <div><Link href="/dash/notes">
                <a >View techNotes</a>
                </Link></div>

            <div><Link href="/dash/users">
                <a ></a>
                </Link>View User Settings</div>
            </div>
        </section>
    )


  return content
}

export default Welcome
