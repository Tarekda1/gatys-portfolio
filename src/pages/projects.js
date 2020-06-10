import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({
  data: {
    allProjects: { projects },
  },
}) => {
  return (
    <Layout>
      <section className="blog-page">
        <Projects title="Projects" projects={projects} />
      </section>
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

export default ProjectsPage
