import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Banner from 'src/components/Banner/Banner'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Banner />
      {/* <h1>Compoze[r]</h1> */}
      {/* <h3>
        `<Link to={routes.home()}>Home</Link>`
      </h3> */}
      <p>
        <code>TEXT EDITOR INTERFACE ARCHITECTURAL TOOL</code>
      </p>
      <ul>
        <li>
          <a href="/login">Log In (default UI)</a>
        </li>
        {/* <li>
          <a href="/posts">Posts (default UI)</a>
        </li> */}
        <li>
          <a href="/compozer">Compozer create screen (beta app UI)</a>
        </li>
        <li>
          <a href="/viewer">Compozer/Viewer list view (beta app UI)</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        {/* <li>
          <a href="/admin">Compozer/Viewer Admin list view (beta app UI)</a>
        </li> */}
      </ul>
      <aside id="keyboard-logo">
        <img
          src="./pacificpelican_simple_logo_for_a_text_editor_wide_landscape_siz_68264788-d647-497d-87ad-ef9dfc5996ce.webp"
          alt="C Compozer logo with keyboard"
          className="front-logo"
        />
      </aside>
    </>
  )
}

export default HomePage
