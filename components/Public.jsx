import Link from 'next/link'
import React from 'react'



const PublicPage = () => {
  return (
     <section className="  ">
            <header className=' '>
                <h1 className='text-3xl font-bold border-b py-3'>Welcome to <span className="nowrap">Dan D. Repairs!</span></h1>
            </header>
            <main className="h-[750px]">
                <p className='py-3'>Located in Beautiful Downtown Foo City, Dan D. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="">
                    Dan D. Repairs<br />
                    555 Foo Drive<br />
                    Foo City, CA 12345<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Dan Davidson</p>
            </main>
            <footer>
                <Link href="/signin">
                    <a className='text-yellow-500'>Employee Login</a>
                    
                </Link>
            </footer>
        </section>
  )
}

export default PublicPage
