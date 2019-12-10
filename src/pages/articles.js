import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import DefaultLayout from '../layouts/DefaultLayout'
import ArticlesPageContent from 'components/Articles/ArticlesPageContent'

const ArticlesPage = ({ data }) => {
  const siteTitle = get(data, 'site.siteMetadata.title')
  const siteDescription = get(data, 'site.siteMetadata.description')
  const articles = get(data, 'allMarkdownRemark.edges')

  return (
    <DefaultLayout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`Posts | ${siteTitle}`}
      />
      <ArticlesPageContent articles={articles} />
    </DefaultLayout>
  )
}

export default ArticlesPage

ArticlesPage.propTypes = {
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            published
            tags
            icon
          }
        }
      }
    }
  }
`
