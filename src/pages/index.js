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

  console.log(projects)

  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects title="featured projects" projects={projects} showLink />
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
  }
`
