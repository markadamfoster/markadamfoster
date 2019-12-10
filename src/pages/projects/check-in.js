import React from 'react'
import Helmet from 'react-helmet'

// Components
import DefaultLayout from 'layouts/DefaultLayout'
import Intro from 'components/Projects/ProjectSingle/IntroSection'
import Content from 'components/Projects/ProjectSingle/Content'
import { projectData } from 'components/Projects/ProjectData'

const CheckIn = () => {
  const project = projectData.find(project => project.name === 'Check-In')

  return (
    <DefaultLayout>
      <Helmet title="Project: Check-In" />

      <Intro project={project} />

      <Content>More details coming soon...</Content>
    </DefaultLayout>
  )
}

export default CheckIn
