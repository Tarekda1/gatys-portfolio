import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = ({
  data: {
    allBlogs: { blogs },
  },
}) => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allBlogs: allStrapiBlogs(sort: { fields: date, order: DESC }) {
      blogs: nodes {
        id
        strapiId
        slug
        content
        description
        date(formatString: "MMMM Do,YYYY")
        image {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        category
      }
    }
  }
`

export default Blog
