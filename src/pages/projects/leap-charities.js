import React from 'react'
import Helmet from 'react-helmet'

// Components
import SubPageLayout from 'src/layouts/SubPageLayout'
import Intro from 'src/components/Projects/ProjectSingle/IntroSection'
import Content from 'src/components/Projects/ProjectSingle/Content'
import ProjectLinks from 'src/components/Projects/ProjectSingle/ProjectLinks'
import Screenshots from 'src/components/Projects/ProjectSingle/ScreenshotSection'
import { projectData } from 'src/components/Projects/ProjectData'

// Screenshots
import ssFront from 'src/assets/projects/leap-charities/front-page.jpg'
import ssBlog from 'src/assets/projects/leap-charities/blog.jpg'

const LeapCharities = () => {
  const project = projectData.find(project => project.slug === 'leap-charities')

  return (
    <SubPageLayout>
      <Helmet title="Project: LEAP Charities" />

      <Intro project={project} />

      <Content>
        <ProjectLinks liveSite="http://www.leapcharities.org" />
      </Content>
      <Screenshots
        data={[
          {
            image: ssFront,
            caption: 'The front page.',
          },
          {
            image: ssBlog,
            caption: 'The blog page.',
          },
        ]}
      />
    </SubPageLayout>
  )
}

export default LeapCharities
