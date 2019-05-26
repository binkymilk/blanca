import React from "react"
import Header from "./header"
import Footer from "./footer"
import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div>
        <Header title={title} />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(3 / 4)} ${rhythm(3 / 4)}`,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
