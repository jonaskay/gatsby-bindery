import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ChapterList from "../components/chapter-list"

const Chapter = ({ data: { current, previous, next, chapters } }) => (
  <Layout>
    <SEO title={current.frontmatter.title} />
    <article>
      <MDXProvider>
        <MDXRenderer>{current.body}</MDXRenderer>
      </MDXProvider>
      {previous && <Link to={previous.fields.slug}>Previous</Link>}
      <Link to="/">Home</Link>
      {next && <Link to={next.fields.slug}>Next</Link>}
      <ChapterList
        active={current.id}
        data={chapters.edges.map(({ node }) => node)}
      />
    </article>
  </Layout>
)

export const pageQuery = graphql`
  query ChapterQuery($id: String, $previous: String, $next: String) {
    current: mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
    previous: mdx(id: { eq: $previous }) {
      fields {
        slug
      }
    }
    next: mdx(id: { eq: $next }) {
      fields {
        slug
      }
    }
    chapters: allMdx(sort: { fields: [fields___number], order: ASC }) {
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

export default Chapter
