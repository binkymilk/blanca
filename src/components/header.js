import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const Header = ({ title }) => (
  <div
    style={{
      display: `flex`,
      flexDirection: `row`,
      padding: `${rhythm(1)}`,
      height: `100px`
    }}
  >
    <h3
      style={{
        margin: 0,
        backgroundColor: `#dcf4dd`,
        borderRadius: rhythm(1),
        padding: `${rhythm(1 / 3)} ${rhythm(2 / 3)}`
      }}
    >
      <Link
        to={`/`}
        style={{
          boxShadow: `none`,
          borderBottom: `none`,
          textDecoration: `none`,
        }}
      >
        {title}
      </Link>
    </h3>
    <div style={{ display: `flex`, marginLeft: `auto` }}>
      <h3
        style={{
          fontWeight: `bold`,
          margin: 0,
          padding: `${rhythm(1 / 3)} ${rhythm(2 / 3)}`
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
          }}
          to={`/blog`}
        >
          blog
        </Link>
      </h3>
    </div>
  </div>
)

export default Header