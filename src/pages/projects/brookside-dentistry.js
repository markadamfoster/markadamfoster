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
import ss01 from 'assets/projects/Brookside/brookside-front.jpg'

export const Head = () => <SEO title="Brookside Dentistry" />

const BrooksideDentistry = () => {
  const project = projectData.find(
    (project) => project.name === 'Brookside Dentistry'
  )

  return (
    <DefaultLayout>
      <Intro project={project} />

      <Content>
        <p>
          A website for an award winning dental office in St. Louis Park,
          Minnesota.
        </p>

        <p>
          For many people, going the dentist isn't their <em>favorite</em>{' '}
          activity. We focused this project on feeling warm and inviting, to
          help begin the process of putting patients at ease. Given Brookside
          Dentistry's outstanding track record, we also wanted to prominently
          feature their recent awards and BBB rating.
        </p>

        <p>
          Other than presenting the office well, the other practical benefit of
          the site is a way for patients to quickly and easy acquire the
          necessary forms. This was built in, as well as an easily-updated blog
          to keep patients informed.
        </p>

        <p>Key technical aspects of the project:</p>
        <ul>
          <li>Exploration and implementation of site objectives and goals</li>
          <li>WordPress site creation, including customized theme work</li>
        </ul>

        <ProjectLinks liveSite="http://www.boisestateyounglife.org/" />
      </Content>

      <Screenshots
        data={[
          {
            image: ss01,
            caption: 'The home page:',
          },
        ]}
      />
    </DefaultLayout>
  )
}

export default BrooksideDentistry
