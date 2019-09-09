import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import SubPageLayout from 'src/layouts/SubPageLayout'
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
      <SubPageLayout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Projects | ${siteTitle}`}
        />
        <h1>Projects</h1>
        <ProjectsList />
      </SubPageLayout>
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
