import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Layout from '../layouts/DefaultLayout'
import HomePageContent from 'components/Home/HomePageContent'

class HomePage extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const articles = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <HomePageContent articles={articles} />
      </Layout>
    )
  }
}

export default HomePage

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
            date(formatString: "D MMM YYYY")
            title
            published
            featured
            popular
            tags
            icon
          }
        }
      }
    }
  }
`
