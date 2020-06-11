import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({
  featured,
  description,
  tag,
  title,
  image: {
    childImageSharp: { fluid },
  },
  github,
  index,
  url,
}) => {
  return (
    <article className="project">
      {fluid && <Image fluid={fluid} className="project-img" />}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {tag.map(({ title, id }) => {
            return <span key={id}>{title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  tag: PropTypes.arrayOf(<PropTypes className="object"></PropTypes>).isRequired,
}

export default Project
