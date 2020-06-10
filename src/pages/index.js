import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

export default ({ data }) => {
  const {
    allProjects: { projects },
  } = data

  const {
    allBlogs: { blogs },
  } = data

  console.log(blogs)

  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects title="featured projects" projects={projects} showLink />
      <Blogs title="Blogs" blogs={blogs} showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allProjects: allStrapiProjects(filter: { featured: { eq: true } }) {
      projects: nodes {
        featured
        id: strapiId
        description
        tag {
          id
          title
        }
        image {
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
      }
    }
    allBlogs: allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
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
