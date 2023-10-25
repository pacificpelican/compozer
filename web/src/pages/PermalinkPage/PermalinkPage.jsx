import PostCell from 'src/components/Post/PostCell'
import Banner from 'src/components/Banner/Banner'

const PostPage = ({ id }) => {
  return <>
    <Banner />
    <PostCell id={id} />
  </>
}

export default PostPage
