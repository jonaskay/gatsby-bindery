import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "#212121",
      fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      textAlign: "center",
      padding: "1rem 0",
    }}
  >
    <h1
      style={{
        fontWeight: 400,
        fontSize: "1.25rem",
        margin: 0,
      }}
    >
      <Link
        to="/"
        style={{ color: "rgba(255,255,255,0.87)", textDecoration: "none" }}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
