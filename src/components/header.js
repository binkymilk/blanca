import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import logo from "../../static/logo.png"
import { rhythm } from "../utils/typography"
import { yellow, orange } from "../utils/theme"

const Header = ({ className, title }) => {
  const path = window.location.pathname
  return (
    <header className={className}>
      <h4 className="title">
        <Link to={`/`}>{title}</Link>
      </h4>
      <Link to={`/`}>
        <img className="logo" alt="blanca" src={logo} />
      </Link>
      <div className="menu">
        <h4>
          <Link
            to={`/art`}
            className={`${path.includes("/art") ? "selected" : ""}`}
          >
            ART
          </Link>
        </h4>
        <h4>
          <Link
            to={`/blog`}
            className={`${path.includes("/blog") ? "selected" : ""}`}
          >
            BLOG
          </Link>
        </h4>
      </div>
    </header>
  )
}

export default styled(Header)`
  display: flex;
  align-items: center;
  background-color: ${yellow};
  flex-direction: row;
  padding-left: ${rhythm(1)};
  padding-right: ${rhythm(1)};
  height: 51px;
  width: 100vw;

  a.selected {
    position: relative;
  }

  a.selected:before {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: ${orange};
    transition: all 0.3s ease-in-out;
    height: 3px;
  }

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

  .menu > h4 {
    font-weight: bold;
    letter-spacing: 0.12em;
    margin: 0;
  }

  .menu > h4:first-child {
    margin-right: ${rhythm(1)};
  }

  @media screen and (max-width: 600px) {
    padding-left: ${rhythm(0.5)};
    padding-right: ${rhythm(0.5)};

    .logo {
      height: 55px;
      left: calc(50% - 33px);
    }

    .menu > h4:first-child {
      margin-right: ${rhythm(0.5)};
    }
  }
`
