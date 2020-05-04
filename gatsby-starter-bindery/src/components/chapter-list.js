import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const isActive = (currentId, activeId) => currentId === activeId

const renderSpan = title => <span>{title}</span>

const renderLink = (title, slug) => <Link to={slug}>{title}</Link>

const ChapterList = ({ active, data }) => (
  <ol>
    {data.map(item => {
      const {
        id,
        frontmatter: { title },
        fields: { slug },
      } = item

      return (
        <li key={item.id}>
          {isActive(id, active) ? renderSpan(title) : renderLink(title, slug)}
        </li>
      )
    })}
  </ol>
)

ChapterList.propTypes = {
  active: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      fields: PropTypes.shape({ slug: PropTypes.string.isRequired }).isRequired,
      frontmatter: PropTypes.shape({ title: PropTypes.string.isRequired })
        .isRequired,
    })
  ).isRequired,
}

export default ChapterList
