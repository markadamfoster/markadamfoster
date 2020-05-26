import React from 'react'
import { Helmet } from 'react-helmet'

// Components
import DefaultLayout from 'layouts/DefaultLayout'
import Intro from 'components/Projects/ProjectSingle/IntroSection'
import Content from 'components/Projects/ProjectSingle/Content'
import ProjectLinks from 'components/Projects/ProjectSingle/ProjectLinks'
import Screenshots from 'components/Projects/ProjectSingle/ScreenshotSection'
import { projectData } from 'components/Projects/ProjectData'

// Screenshots
import ss01 from 'assets/projects/RentBuy/mrwb-front.jpg'
import ss02 from 'assets/projects/RentBuy/mrwb-email-capture.jpg'
import ss03 from 'assets/projects/RentBuy/mrwb-results.jpg'

const MyRentWillBuy = () => {
  const project = projectData.find(
    (project) => project.name === 'My Rent Will Buy'
  )

  return (
    <DefaultLayout>
      <Helmet title="Project: My Rent Will Buy" />

      <Intro project={project} />

      <Content>
        <p>
          My Rent Will Buy is a web app geared toward toward helping potential
          home buyers quickly learn how much they may be able to qualify for. By
          answering a few simple questions, they get a quick estimate, as well
          the information of a local mortgage officer.
        </p>

        <p>
          This database-backed Ruby on Rails web app can be used to help
          generate leads for real estate agents and mortgage lenders, and allows
          for a large amount of customization in regards to automatic followup
          emails, lead notifications, and more.
        </p>

        <p>Key technical aspects of the project:</p>
        <ul>
          <li>built with Ruby on Rails</li>
          <li>database design and implementation with PostgreSQL</li>
          <li>front-end implementation with Bootstrap 3 and SASS</li>
          <li>
            customizable email templates for lead notifications and followups
          </li>
        </ul>

        <ProjectLinks
          liveSite="http://www.myrentwillbuy.com/"
          code="https://github.com/foster154/rentbuy"
        />
      </Content>

      <Screenshots
        data={[
          {
            image: ss01,
            caption: 'The initial screen.',
          },
          {
            image: ss02,
            caption: 'An email capture interface before displaying results.',
          },
          {
            image: ss03,
            caption: 'The results page.',
          },
        ]}
      />
    </DefaultLayout>
  )
}

export default MyRentWillBuy
