import React from 'react'
import Helmet from 'react-helmet'

// Components
import DefaultLayout from 'src/layouts/DefaultLayout'
import Intro from 'src/components/Projects/ProjectSingle/IntroSection'
import Content from 'src/components/Projects/ProjectSingle/Content'
import { projectData } from 'src/components/Projects/ProjectData'

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
