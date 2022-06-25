import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = ({ data }: any) => {
  if (!data) {
    return <h1>Nothing data</h1>
  }

  return (
    <div>
      <Head>
        <title>nest</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        {data?.map((el: any) => (
          <h1 key={el.id}>{el.title}</h1>
        ))}
      </div>
    </div>
  )
}

export default Home

// export const getServerSideProps = async () => {
//   const res = await fetch('http://localhost:5000/api/users')
//   const data = await res?.json() || {}
//   return {
//     data
//   }
// }
