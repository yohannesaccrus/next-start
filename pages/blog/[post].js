import posts  from '../../posts.json'
import Layout from '../../components/layout/Layout'

const Post = props => {
  return (
    <Layout>
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
    </div>
    </Layout>
  )
}

Post.getInitialProps = ({query}) => {
  return {
    post: posts[query.post]
  }
}

export default Post
