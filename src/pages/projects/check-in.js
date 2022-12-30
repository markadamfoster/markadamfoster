import React from 'react'

// Components
import DefaultLayout from 'layouts/DefaultLayout'
import SEO from 'components/Shared/SEO'
import Intro from 'components/Projects/ProjectSingle/IntroSection'
import Content from 'components/Projects/ProjectSingle/Content'
import { projectData } from 'components/Projects/ProjectData'

export const Head = () => <SEO title="Check-In Project" />

const CheckIn = () => {
  const project = projectData.find((project) => project.name === 'Check-In')

  return (
    <DefaultLayout>
      <Intro project={project} />

      <Content>More details coming soon...</Content>
    </DefaultLayout>
  )
}

export default CheckIn
