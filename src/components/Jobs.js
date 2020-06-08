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
        desc {
          job_description
        }
      }
    }
  }
`

const Jobs = () => {
  const {
    allJobs: { jobs },
  } = useStaticQuery(query)
  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="jobs-center">
        {/*btn containter */}
        {jobs.map(job => {
          const { id, date, position, company, desc } = job
          return <article key={id}>{company}</article>
        })}
        {/*job info */}
      </div>
    </section>
  )
}

export default Jobs
