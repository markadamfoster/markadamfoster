import React from 'react'

import SEO from 'components/Shared/SEO'
import DefaultLayout from 'layouts/DefaultLayout'
import ProjectsList from 'components/Projects/ProjectsList/ProjectsList'

export const Head = () => <SEO title="Projects" />

export default function Projects() {
  return (
    <DefaultLayout>
      <h1>Projects</h1>
      <ProjectsList />
    </DefaultLayout>
  )
}
