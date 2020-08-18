import React from "react"
import styled from "styled-components"

import Header from "./header"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { title, children, className } = this.props

    return (
      <div className={className}>
        <Header title={title} />
        <div className="stripes">
          <div className="grid">
            <div className="stripe-item" />
            <div className="stripe-item" />
            <div className="stripe-item" />
            <div className="stripe-item" />
            <div className="stripe-item" />
            <div className="stripe-item" />
          </div>
        </div>
        <main className="content">{children}</main>
      </div>
    )
  }
}

export default styled(Layout)`
  .stripes {
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  .stripes > .grid {
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: ;
    gap: 1px 1px;
    grid-template-areas: ". . . . . .";
  }

  .grid > .stripe-item {
    background: rgba(0, 0, 0, 0.07);
    height: 100%;
    width: 1px;
    margin-right: 100px;
  }

  .grid > .stripe-item:first-child {
    width: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    max-width: ${rhythm(24)};
    min-height: calc(100vh - 51px);
    padding: ${rhythm(3 / 4)} ${rhythm(3 / 4)};
  }
`
