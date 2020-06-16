import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import Title from "../components/Title"
import SEO from "../components/SEO"
const ComponentName = ({
  data: {
    blog: { id, title, image, category, description, slug, date, content },
  },
}) => {
  return (
    <Layout>
      <SEO title={title} description={description} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      date(formatString: "MMMM, Do,YYYY")
      description
      id
      image {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      slug
      strapiId
      title
      category
    }
  }
`

export default ComponentName
