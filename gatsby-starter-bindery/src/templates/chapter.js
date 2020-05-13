import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/article"
import Navigation from "../components/navigation"
import ChapterList from "../components/chapter-list"

const Chapter = ({ data: { current, previous, next, chapters } }) => (
  <Layout>
    <SEO title={current.frontmatter.title} />
    <Article>
      <MDXProvider>
        <MDXRenderer>{current.body}</MDXRenderer>
      </MDXProvider>
      <Navigation previous={previous} next={next} />
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
          ...ChapterFragment
        }
      }
    }
  }
`

export default Chapter
