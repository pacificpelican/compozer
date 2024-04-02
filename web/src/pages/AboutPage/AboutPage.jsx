import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Markdown from 'react-markdown'

const markdown = `
## [Compozer GitHub](https://github.com/pacificpelican/compozer)

**'a text editing tool built on web technology'**

*created in 2023-2024 by [Daniel J. McKeown](https://danieljmckeown.com)*

### Features
- Custom Composition Page
- Custom Post List
- Custom Post Page with [Share Sheet](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API)
- Built on [RedwoodJS](https://redwoodjs.com) v6
- Account System (using [DB Auth](https://redwoodjs.com/docs/auth/dbauth))
- Ready for Local Deployment
- Steps before Remote Deployment
  - Query, Edit, and Delete only a user's own posts (security)
  - Connect to a Deployment Database (data)
  - Share Sheet still not supported on all browsers ([web standards](https://caniuse.com/web-share))
`

const AboutPage = () => {
  return (
    <>
      <Link to={routes.about()}>
        <h1 id="about">About</h1>
      </Link>
      <MetaTags title="About" description="About page" />

      <main id="md-content">
        <p id="f-con">
          <img id="ekey" src="./ecom.jpg" alt="keyboard ocean C logo" />
          <Markdown>{markdown}</Markdown>
        </p>
      </main>
      <footer id="about">
        <a href="../.">
          <p id="backButton">🔙</p>
        </a>
      </footer>
    </>
  )
}

export default AboutPage
