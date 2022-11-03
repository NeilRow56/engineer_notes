import Head from 'next/head'
import React from 'react'
import DashLayout from '../components/DashLayout'
import PublicPage from '../components/Public'

const PublicHomePage = () => {
  return (
    <div>
      <Head>
        <title>Public Home Page </title>
    </Head>
    <DashLayout >
      <PublicPage />

    </DashLayout>
    </div>
  )
}

export default PublicHomePage

