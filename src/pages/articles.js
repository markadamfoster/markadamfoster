import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import DefaultLayout from '../layouts/DefaultLayout'
import ArticlesPageContent from 'components/Articles/ArticlesPageContent'

ArticlesPage.propTypes = {
  data: PropTypes.object,
}

function ArticlesPage({ data }) {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description

  return (
    <DefaultLayout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`Articles | ${siteTitle}`}
      />
      <ArticlesPageContent />
    </DefaultLayout>
  )
}

export default ArticlesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
