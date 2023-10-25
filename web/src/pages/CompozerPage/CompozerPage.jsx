import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import NewPost from 'src/components/Compozer/NewPost'
import Banner from 'src/components/Banner/Banner'

const CompozerPage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Banner />
      <h1>COMPOZE_prototype</h1>

      <p>
        <Link to={routes.home()}>Home</Link>
      </p>

      <NewPost />
    </>
  )
}

export default CompozerPage
