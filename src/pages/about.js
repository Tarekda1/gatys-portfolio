import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid
const About = ({
  data: {
    about: {
      title,
      info,
      id,
      tags,
      image: {
        childImageSharp: { fluid },
      },
    },
  },
}) => {
  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {tags.map(tag => {
                return <span key={tag.id}>{tag.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: strapiAbout {
      title
      info
      id
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tags: stack {
        id
        title
      }
    }
  }
`
export default About
