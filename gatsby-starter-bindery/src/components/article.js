import React from "react"
import PropTypes from "prop-types"

import "./article.css"

const Article = ({ children }) => <article>{children}</article>

Article.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Article
