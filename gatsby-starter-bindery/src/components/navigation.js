import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const renderLink = (title, slug) => <Link to={slug}>{title}</Link>

const renderSpan = title => (
  <span style={{ color: "rgba(0,0,0,0.38)" }}>{title}</span>
)

const Navigation = ({ previous, next }) => (
  <nav
    style={{
      borderTop: "1px solid rgba(0,0,0,0.12)",
      display: "flex",
      justifyContent: "space-between",
      margin: "2rem 0",
      padding: "1rem 0",
    }}
  >
    <div style={{ width: "33%" }}>
      {previous
        ? renderLink("Previous", previous.fields.slug)
        : renderSpan("Previous")}
    </div>
    <div style={{ textAlign: "center", width: "33%" }}>
      {renderLink("Home", "/")}
    </div>
    <div style={{ textAlign: "right", width: "33%" }}>
      {next ? renderLink("Next", next.fields.slug) : renderSpan("Next")}
    </div>
  </nav>
)

Navigation.propTypes = {
  previous: PropTypes.shape({
    fields: PropTypes.shape({ slug: PropTypes.string.isRequired }).isRequired,
  }),
  next: PropTypes.shape({
    fields: PropTypes.shape({ slug: PropTypes.string.isRequired }).isRequired,
  }),
}

export default Navigation
