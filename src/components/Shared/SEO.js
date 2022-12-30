import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.object,
}

SEO.defaultProps = {
  meta: [],
  description: ``,
}

function SEO({ description, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const fullTitle = `${title} | ${site.siteMetadata.title}`

  return (
    <>
      <title id="title">{fullTitle}</title>
      <meta id="description" name="description" content={metaDescription} />

      <meta id="og:title" name="og:title" content={title} />
      <meta
        id="og:description"
        name="og:description"
        content={metaDescription}
      />
      <meta id="og:type" name="og:type" content="website" />

      <meta id="twitter:card" name="twitter:card" content="summary" />
      <meta
        id="twitter:creator"
        name="twitter:creator"
        content={site.siteMetadata.social.twitter}
      />
      <meta id="twitter:title" name="twitter:title" content={title} />
      <meta
        id="twitter:description"
        name="twitter:description"
        content={metaDescription}
      />

      {children}
    </>
  )
}

export default SEO
