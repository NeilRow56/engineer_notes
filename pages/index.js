import Head from "next/head"
import Layout from '../components/Layout'
import PublicPage from '../components/Public'

const Home = () => {
  return (
    
      <>
        <Head>
        <title>Home Page</title>
    </Head>
    <Layout>
    <main className=''>
      <h1>Home</h1>

      <PublicPage />
    </main>
      
        </Layout> 
      </>
      
     
    
  )
}

export default Home

