import React from "react"
import { graphql } from "gatsby"

import Gallery from "@browniebroke/gatsby-image-gallery"
import "@browniebroke/gatsby-image-gallery/dist/style.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const ArtIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  const captions = ["hi1", "hi2", "hi3", "hi4", "hi5", "hi6", "hi7", "hi8"]
  const images_new = images.map((image, index) => ({
    ...image,
    caption: captions[index],
  }))
  console.log(images_new)

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
        <Gallery images={images_new} />
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
      sort: { fields: name }
    ) {
      edges {
        node {
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
