import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import { server } from '../config'

export default function Home({articles}) {
  return (
    <div>
      {/* <Head>
        <title>Web dev Newz</title>
        <meta name="keywords" content="web development, programming" />
      </Head> */}
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  // const res = await fetch(server + '/api/articles', {
  //   headers: {
  //     'Accept': 'application/json',
  //     'User-Agent': '*',
  //   }
  // })
  const articles = await res.json()
  // const articles =  JSON.stringify(res)

  return {
    props: {
      articles
    }
  }
}