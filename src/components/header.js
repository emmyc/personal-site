import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/main.scss"
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `none`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className="header">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <div id="logo">
            ec
            <span className="blue-dot" />
          </div>
        </Link>
      </h1>
      <ul className="nav">
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
