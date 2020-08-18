import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import featured from "../../static/art/red-swan.png"
import { yellow } from "../utils/theme"

const FeaturedPost = () => {
  return (
    <svg id="circle" width="500" height="500">
      <defs>
        <path
          d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
          id="textcircle"
        >
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur="30s"
            type="rotate"
            from="0 250 250"
            to="360 250 250"
            repeatCount="indefinite"
          />
        </path>
        <pattern
          id="image"
          x="0%"
          y="0%"
          height="100%"
          width="100%"
          viewBox="0 0 100% 100%"
        >
          <image x="0%" y="0%" width="380" height="380" href={featured} />
        </pattern>
      </defs>
      <circle id="sd" cx="50%" cy="50%" r="190" fill="url(#image)" />
      <text textLength="1220">
        <textPath xlinkHref="#textcircle">
          FEATURED POST • FEATURED POST • FEATURED POST • FEATURED POST •
        </textPath>
      </text>
    </svg>
  )
}

class BlogIndex extends React.Component {
  render() {
    const { data, className } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />
        <div className={className}>
          <div className="featured">
            <FeaturedPost />
          </div>
          <p>
            Hi, my name is Bianca. <br /> This is where I dump my stuff.
          </p>
        </div>
      </Layout>
    )
  }
}

export default styled(BlogIndex)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;

  textpath {
    fill: ${yellow};
    letter-spacing: 0.67em;
    font-family: "Poppins";
    font-weight: 800;
  }

  p {
    text-align: center;
    font-weight: 400;
  }
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
