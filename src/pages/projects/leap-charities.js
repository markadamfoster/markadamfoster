import React from 'react'

// Components
import DefaultLayout from 'layouts/DefaultLayout'
import SEO from 'components/Shared/SEO'
import Intro from 'components/Projects/ProjectSingle/IntroSection'
import Content from 'components/Projects/ProjectSingle/Content'
import ProjectLinks from 'components/Projects/ProjectSingle/ProjectLinks'
import Screenshots from 'components/Projects/ProjectSingle/ScreenshotSection'
import { projectData } from 'components/Projects/ProjectData'

// Screenshots
import ssFront from 'assets/projects/leap-charities/front-page.jpg'
import ssBlog from 'assets/projects/leap-charities/blog.jpg'

export const Head = () => <SEO title="LEAP Charities" />

const LeapCharities = () => {
  const project = projectData.find(
    (project) => project.slug === 'leap-charities'
  )

  return (
    <DefaultLayout>
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
    </DefaultLayout>
  )
}

export default LeapCharities
