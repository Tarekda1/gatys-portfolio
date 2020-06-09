import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allJobs: allStrapiJobs {
      jobs: nodes {
        id
        date
        position
        company
        strapiId
        desc {
          jobDesc: job_description
          id
        }
      }
    }
  }
`

const Jobs = () => {
  const {
    allJobs: { jobs },
  } = useStaticQuery(query)
  const [value, setValue] = React.useState(0)
  const { company, date, position, desc } = jobs[value]
  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="jobs-center">
        {/*btn containter */}
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                className={`job-btn ${index === value && "active-btn"}`}
                onClick={() => setValue(index)}
                key={job.strapiId}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        {/*job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(({ jobDesc, id }, index) => {
            return (
              <div key={id} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{jobDesc}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
