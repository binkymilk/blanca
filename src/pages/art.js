import React from "react"
import { graphql } from "gatsby"

import Gallery from "@browniebroke/gatsby-image-gallery"
import "@browniebroke/gatsby-image-gallery/dist/style.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import captions from "../../static/captions"
import { rhythm } from "../utils/typography"

const ArtIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const images = data.allFile.edges.map(({ node }) => ({
    ...node.childImageSharp,
    caption: captions[node.base],
  }))
  console.log(images)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="ART" />
      <div
        style={{
          height: "100%",
          maxWidth: rhythm(40),
          width: "100%",
          paddingTop: rhythm(2),
        }}
      >
        <Gallery images={images} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { fields: name, order: DESC }
    ) {
      edges {
        node {
          base
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ArtIndex
