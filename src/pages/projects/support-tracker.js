import React from 'react'
import Helmet from 'react-helmet'

// Components
import DefaultLayout from 'layouts/DefaultLayout'
import Intro from 'components/Projects/ProjectSingle/IntroSection'
import Content from 'components/Projects/ProjectSingle/Content'
import Screenshots from 'components/Projects/ProjectSingle/ScreenshotSection'
import { projectData } from 'components/Projects/ProjectData'

// Screenshots
import ss01 from 'assets/projects/SupportTracker/support_tracker_1.jpg'
import ss02 from 'assets/projects/SupportTracker/support_tracker_2.jpg'
import ss03 from 'assets/projects/SupportTracker/support_tracker_3.jpg'
import ss04 from 'assets/projects/SupportTracker/support_tracker_4.jpg'

const SupportTracker = () => {
  const project = projectData.find(
    project => project.name === 'Support Tracker'
  )

  return (
    <DefaultLayout>
      <Helmet title="Project: Support Tracker" />

      <Intro project={project} />

      <Content>
        <p>
          Support Tracker is a Ruby on Rails web app used to track support cases
          and follow up tasks.
        </p>

        <p>
          I currently manage the support team at a local software company, and
          we needed a better tool for tracking cases, followups and metrics as
          the support team grew. There were some great help desk solutions
          available, but none quite fit the system we had already evolved and
          loved (particularly with tracking phone-based support cases).
        </p>

        <p>
          This was a fantastic project for continuing to build and hone my
          front-end and Rails chops… it had instant users and provided real-life
          value right out of the gates.
        </p>

        <p>Key technical aspects of the project:</p>
        <ul>
          <li>Ruby on Rails framework</li>
          <li>database design and implementation with PostgreSQL</li>
          <li>front-end implementation with Bootstrap</li>
        </ul>
      </Content>

      <Screenshots
        data={[
          {
            image: ss01,
            caption: 'Case list view.',
          },
          {
            image: ss02,
            caption:
              'Calendar view, showing case numbers and minutes per day, with weekly totals.',
          },
          {
            image: ss03,
            caption: 'Tag metrics by month.',
          },
          {
            image: ss04,
            caption: 'Support ticket creation form.',
          },
        ]}
      />
    </DefaultLayout>
  )
}

export default SupportTracker
