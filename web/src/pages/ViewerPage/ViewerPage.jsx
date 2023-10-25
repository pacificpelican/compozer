import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PostsCell from 'src/components/Viewer/PostsCell'
import Banner from 'src/components/Banner/Banner'

const ViewerPage = () => {
  return (
    <>
      <MetaTags title="Viewer" description="Viewer page" />
      <Banner />
      <h1>ViewerPage</h1>
      <PostsCell />
    </>
  )
}

export default ViewerPage
