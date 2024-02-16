import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import NewPost from 'src/components/Compozer/NewPost'
import Banner from 'src/components/Banner/Banner'

const CompozerPage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Banner />

      <NewPost />
{/*
      <span id="currentUser">user: </span> */}
    </>
  )
}

export default CompozerPage
