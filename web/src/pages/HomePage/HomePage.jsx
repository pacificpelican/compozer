import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <h1>Compoze[r]</h1>
      <h3>
        `<Link to={routes.home()}>Home</Link>`
      </h3>
      <p>
        <code>TEXT EDITOR INTERFACE ARCHITECTURAL TOOL</code>
      </p>
      <ul>
        <li><a href="/posts">Posts</a></li>
      </ul>
    </>
  )
}

export default HomePage
