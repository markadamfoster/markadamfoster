import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'

import DefaultLayout from 'layouts/DefaultLayout'
import ProjectsList from 'components/Projects/ProjectsList/ProjectsList'

class Projects extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    console.log('siteTitle:', siteTitle)

    return (
      <DefaultLayout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Projects | ${siteTitle}`}
        />
        <h1>Projects</h1>
        <ProjectsList />
      </DefaultLayout>
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
