import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/article"
import ChapterList from "../components/chapter-list"

const IndexPage = ({ data }) => {
  const chapters = data.allMdx.edges.map(({ node }) => node)

  return (
    <Layout>
      <SEO title="Home" />
      <h1
        style={{
          lineHeight: 1.375,
          margin: "1.5rem 0 2.5rem",
          textAlign: "center",
        }}
      >
        The Wonderful Wizard of Oz
        <span style={{ fontSize: "80%" }}>
          <br />
          by
          <br />
          L. Frank Baum
        </span>
      </h1>
      <Article>
        <aside
          style={{
            background: "#F5F5F5",
            padding: "1rem 1rem 0.5rem",
          }}
        >
          <h2 style={{ margin: 0 }}>Contents</h2>
          <ChapterList data={chapters} />
        </aside>
        <p>
          Folklore, legends, myths and fairy tales have followed childhood
          through the ages, for every healthy youngster has a wholesome and
          instinctive love for stories fantastic, marvelous and manifestly
          unreal. The winged fairies of Grimm and Andersen have brought more
          happiness to childish hearts than all other human creations.
        </p>
        <p>
          Yet the old time fairy tale, having served for generations, may now be
          classed as "historical" in the children's library; for the time has
          come for a series of newer "wonder tales" in which the stereotyped
          genie, dwarf and fairy are eliminated, together with all the horrible
          and blood-curdling incidents devised by their authors to point a
          fearsome moral to each tale. Modern education includes morality;
          therefore the modern child seeks only entertainment in its wonder
          tales and gladly dispenses with all disagreeable incident.
        </p>
        <p>
          Having this thought in mind, the story of "The Wonderful Wizard of Oz"
          was written solely to please children of today. It aspires to being a
          modernized fairy tale, in which the wonderment and joy are retained
          and the heartaches and nightmares are left out.
        </p>
        <p style={{ fontStyle: "italic" }}>
          L. Frank Baum
          <br />
          Chicago, April, 1900.
        </p>
      </Article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      filter: { fields: { content: { eq: "chapter" } } }
      sort: { fields: [fields___number], order: ASC }
    ) {
      edges {
        node {
          id
          ...ChapterFragment
        }
      }
    }
  }
`

export default IndexPage
