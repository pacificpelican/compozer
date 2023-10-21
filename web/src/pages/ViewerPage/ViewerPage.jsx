import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PostsCell from 'src/components/Viewer/PostsCell'

const ViewerPage = () => {
  return (
    <>
      <MetaTags title="Viewer" description="Viewer page" />

      <h1>ViewerPage</h1>
      <PostsCell />
    </>
  )
}

export default ViewerPage
