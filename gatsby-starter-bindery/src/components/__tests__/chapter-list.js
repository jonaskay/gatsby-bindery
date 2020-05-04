import React from "react"
import { create } from "react-test-renderer"

import ChapterList from "../chapter-list"
import { Link } from "../../__mocks__/gatsby"

describe("ChapterList", () => {
  const data = [
    { id: "1", frontmatter: { title: "foo" }, fields: { slug: "/foo" } },
    { id: "2", frontmatter: { title: "bar" }, fields: { slug: "/bar" } },
    { id: "3", frontmatter: { title: "baz" }, fields: { slug: "/baz" } },
  ]

  it("Displays links to chapters", () => {
    const renderer = create(<ChapterList data={data} />)
    const instance = renderer.root

    const link = instance.findAllByType(Link)[0]

    expect(link.props.children).toBe("foo")
    expect(link.props.to).toBe("/foo")
  })

  it("Doesn't display a link to active chapter", () => {
    const renderer = create(<ChapterList data={data} active={data[0].id} />)
    const instance = renderer.root

    const link = instance.findAllByType(Link)[0]

    expect(link.props.children).toBe("bar")
    expect(link.props.to).toBe("/bar")

    const span = instance.findByType("span")
    expect(span.props.children).toBe("foo")
  })
})
