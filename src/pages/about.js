import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Layout from '../layouts/DefaultLayout'
import AboutPage from 'components/About/AboutPage'

function About(props) {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const siteDescription = get(props, 'data.site.siteMetadata.description')

  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`About | ${siteTitle}`}
      />
      <AboutPage />
    </Layout>
  )
}

export default About

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
