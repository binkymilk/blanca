import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Github, Twitter } from 'grommet-icons';

const Footer = () => {
  return (
    <StaticQuery
      query={footerQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              justifyContent: `center`
            }}
          >
            <a
              style={{ borderBottom: `none`, margin: `10px` }}
              href={`https://twitter.com/${social.twitter}`}
            >
              <Twitter />
            </a>
            <a
              style={{ borderBottom: `none`, margin: `10px` }}
              href={`https://github.com/${social.twitter}`}
            >
              <Github />
            </a>
          </div>
        )
      }}
    />
  )
}

const footerQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          twitter
          github
        }
      }
    }
  }
`

export default Footer
