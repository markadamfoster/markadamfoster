import React from 'react'
import Helmet from 'react-helmet'

// Components
import SubPageLayout from 'src/layouts/SubPageLayout'
import Intro from 'src/components/Projects/ProjectSingle/IntroSection'
import Content from 'src/components/Projects/ProjectSingle/Content'
import { projectData } from 'src/components/Projects/ProjectData'

const CheckIn = () => {
  const project = projectData.find(project => project.name === 'Check-In')

  return (
    <SubPageLayout>
      <Helmet title="Project: Check-In" />

      <Intro project={project} />

      <Content>More details coming soon...</Content>
    </SubPageLayout>
  )
}

export default CheckIn
