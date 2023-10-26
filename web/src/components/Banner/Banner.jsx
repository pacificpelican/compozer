import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const Banner = () => {
  return (
    <>
      <section id="top-banner">
        <h1 id="banner">
          <img
            src="/compoze-logo.webp"
            alt="Compoze[r] logo"
            className="logoImg"
          />
          <Link to={routes.home()}>Compoze[r]</Link>
        </h1>
      </section>
    </>
  )
}

export default Banner
