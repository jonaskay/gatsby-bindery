import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Chapter = ({ data: { chapter, previous, next } }) => (
  <Layout>
    <SEO title={chapter.frontmatter.title} />
    <article>
      <MDXProvider>
        <MDXRenderer>{chapter.body}</MDXRenderer>
      </MDXProvider>
      {previous && <Link to={previous.fields.slug}>Previous</Link>}
      {next && <Link to={next.fields.slug}>Next</Link>}
    </article>
  </Layout>
)

export const pageQuery = graphql`
  query ChapterQuery($id: String, $previous: String, $next: String) {
    chapter: mdx(id: { eq: $id }) {
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
  }
`

export default Chapter
