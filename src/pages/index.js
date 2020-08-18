import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data, className } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />
        <div className={className} />
      </Layout>
    )
  }
}

export default styled(BlogIndex)`
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

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
