import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import logo from "../../static/logo.png"
import { rhythm } from "../utils/typography"
import { yellow, orange } from "../utils/theme"

const Header = ({ className, title }) => (
  <header className={className}>
    <h3 className="title">
      <Link to={`/`}>{title}</Link>
    </h3>
    <img className="logo" alt="blanca" src={logo} />
    <div className="menu">
      <h3>
        <Link to={`/blog`}>blog</Link>
      </h3>
    </div>
  </header>
)

export default styled(Header)`
  display: flex;
  align-items: center;
  background-color: ${yellow};
  flex-direction: row;
  padding-left: ${rhythm(1)};
  padding-right: ${rhythm(1)};
  height: 51px;

  .title {
    color: ${orange};
    margin: 0;
    letter-spacing: 0.12em;
  }

  .logo {
    height: 95px;
    width: auto;
    position: absolute;
    left: calc(50% - 56px);
    top: 16px;
  }

  .menu {
    display: flex;
    margin-left: auto;
  }

  .menu > h3 {
    font-weight: bold;
    letter-spacing: 0.12em;
    margin: 0;
  }
`
