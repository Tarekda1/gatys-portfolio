import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        defaultImage: image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description, image, article }) => {
  const data = useStaticQuery(query)

  const { pathname } = useLocation()
  const {
    site: {
      siteMetadata: {
        author,
        siteDesc,
        defaultImage,
        siteUrl,
        siteTitle,
        twitterUsername,
      },
    },
  } = data
  const seo = {
    title: title,
    siteTitle: siteTitle,
    siteDesc: siteDesc,
    description: description,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

export default SEO
