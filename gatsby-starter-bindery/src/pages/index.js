import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const chapters = data.allMdx.edges

  return (
    <Layout>
      <SEO title="Home" />
      <h1>
        The Wonderful Wizard of Oz
        <br />
        by
        <br />
        L. Frank Baum
      </h1>
      <h2>Contents</h2>
      <ol>
        {chapters.map(({ node: chapter }) => (
          <li key={chapter.id}>
            <Link to={chapter.fields.slug}>{chapter.frontmatter.title}</Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [fields___number], order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
