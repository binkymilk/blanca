import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />
        <div
          style={{
            //background: `green`,
            height: `calc(100vh - 210px)`,
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `center`
          }}
        >
          <p
            style={{
              ...scale(2.75),
              fontWeight: `bold`,
              lineHeight: `1.2`
            }}
          >
            ;-)
          </p>
          <p
            style={{
              ...scale(0.50),
              fontWeight: `bold`,
              lineHeight: `1.5`,
              textAlign: `center`
            }}
          >
            hi, my name is {` `}
            <span
              style={{
                backgroundColor: `#dcf4dd`,
                borderRadius: rhythm(1),
                padding: `${rhythm(1 / 4)} ${rhythm(1 / 2)}`
              }}
            >
              bianca
            </span><br />
            this is where i dump my stuff
          </p>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
