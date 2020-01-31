/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "../styles/defaults.scss"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaMedium,
  FaEnvelopeSquare,
} from "react-icons/fa"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 950,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        <div className="footer-text" id="footer">
          <h2>
            <span className="underline">Contact</span>
          </h2>
          <p>
            Thank you for making it this far! Although this is as far as my
            website goes, you can stay in touch with me at{" "}
            <a href="mailto:emmycao@g.ucla.edu">emmycao@g.ucla.edu</a>.
            Alternatively, you can read my <a>blog</a>, or explore snippets of
            my life through any of the links here.
          </p>
        </div>
        <div className="socials">
          <a href="mailto:emmycao@g.ucla.edu">
            <FaEnvelopeSquare className="social-icon" />
          </a>
          <a href="https://www.facebook.com/cosmocows">
            <FaFacebookSquare className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/emmycao">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.github.com/emmyc">
            <FaGithubSquare className="social-icon" />
          </a>
        </div>
      </footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
