import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import MainPageLayout from 'src/layouts/MainPageLayout'
import ProjectsList from 'src/components/Projects/ProjectsList/ProjectsList'

class Projects extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    console.log('siteTitle:', siteTitle)

    return (
      <MainPageLayout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Projects | ${siteTitle}`}
        />

        <ProjectsList />
      </MainPageLayout>
    )
  }
}

export default Projects

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
