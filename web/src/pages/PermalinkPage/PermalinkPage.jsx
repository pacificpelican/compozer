import Banner from 'src/components/Banner/Banner'
import PostCell from 'src/components/Permalink/PostCell'

const PostPage = ({ id }) => {
  return (
    <>
      <Banner />
      <PostCell id={id} />
    </>
  )
}

export default PostPage
