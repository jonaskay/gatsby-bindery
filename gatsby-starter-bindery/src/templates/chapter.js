import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/article"
import ChapterList from "../components/chapter-list"

const Chapter = ({ data: { current, previous, next, chapters } }) => (
  <Layout>
    <SEO title={current.frontmatter.title} />
    <Article>
      <MDXProvider>
        <MDXRenderer>{current.body}</MDXRenderer>
      </MDXProvider>
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
          {previous ? (
            <Link to={previous.fields.slug}>Previous</Link>
          ) : (
            <span style={{ color: "rgba(0,0,0,0.38)" }}>Previous</span>
          )}
        </div>
        <div style={{ textAlign: "center", width: "33%" }}>
          <Link to="/">Home</Link>
        </div>
        <div style={{ textAlign: "right", width: "33%" }}>
          {next ? (
            <Link to={next.fields.slug}>Next</Link>
          ) : (
            <span style={{ color: "rgba(0,0,0,0.38)" }}>Next</span>
          )}
        </div>
      </nav>
      <nav style={{ margin: "0 auto", maxWidth: "20rem" }}>
        <h2 style={{ textAlign: "center" }}>Contents</h2>
        <ChapterList
          active={current.id}
          data={chapters.edges.map(({ node }) => node)}
        />
      </nav>
    </Article>
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
