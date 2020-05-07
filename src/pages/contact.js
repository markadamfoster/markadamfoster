import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Layout from '../layouts/DefaultLayout'
import ContactPageContent from 'components/Contact/ContactPageContent'

function ContactPage(props) {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const siteDescription = get(props, 'data.site.siteMetadata.description')

  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`Contact | ${siteTitle}`}
      />
      <ContactPageContent />
    </Layout>
  )
}

export default ContactPage

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
