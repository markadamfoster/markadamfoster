import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import DefaultLayout from '../layouts/DefaultLayout'
import Posts from 'src/components/Posts/Posts'

const PostsPage = ({ data }) => {
  const siteTitle = get(data, 'site.siteMetadata.title')
  const siteDescription = get(data, 'site.siteMetadata.description')

  return (
    <DefaultLayout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`Posts | ${siteTitle}`}
      />
      <Posts />
    </DefaultLayout>
  )
}

export default PostsPage

PostsPage.propTypes = {
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
  }
`
