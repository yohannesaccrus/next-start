import Link   from 'next/link'
import posts  from '../posts.json'
import Layout from '../components/layout/Layout'

const Blog = () => {
  return (
    <Layout title={'Page Builder - Blog'}>
      <h1>Blog</h1>
      <ul>
        {Object.entries(posts).map((value, index) => {
          return (
            <li key={index}>
              <Link href={'/blog/[post]'} as={'/blog/' + value[0]}>
                <a>{value[1].title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog
