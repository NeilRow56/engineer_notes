import Head from 'next/head'
import React from 'react'
import DashLayout from '../../components/DashLayout'
import Welcome from '../../features/Welcome'

const PublicHomePage = () => {
  return (
    <div>
      <Head>
        <title>Public Home Page </title>
    </Head>
    <DashLayout >
      <Welcome />

    </DashLayout>
    </div>
  )
}

export default PublicHomePage

