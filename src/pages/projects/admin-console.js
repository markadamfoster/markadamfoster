import React from 'react'
import Helmet from 'react-helmet'

// Components
import DefaultLayout from 'layouts/DefaultLayout'
import Intro from 'components/Projects/ProjectSingle/IntroSection'
import Content from 'components/Projects/ProjectSingle/Content'
import Screenshots from 'components/Projects/ProjectSingle/ScreenshotSection'
import { projectData } from 'components/Projects/ProjectData'

// Screenshots
import childList from 'assets/projects/admin-console/ac-child-list.png'
import childDetail from 'assets/projects/admin-console/ac-child-detail.png'
import guardianDetail from 'assets/projects/admin-console/ac-guardian-detail.png'
import dashboard from 'assets/projects/admin-console/ac-dashboard.png'

const AdminConsole = () => {
  const project = projectData.find(project => project.name === 'Admin Console')

  return (
    <DefaultLayout>
      <Helmet title="Project: Admin Console" />

      <Intro project={project} />

      <Content>
        <p>
          I really enjoyed this project! Our goal was to explore the React
          Native framework by creating a simple mobile application that allowed
          childcare workers to view all the necessary information about the
          children in their care.
        </p>
        <p>
          The final product was a cross platform (iOS and Android) and
          responsive (tablet and phone) app that was really well received by
          customers.
        </p>
      </Content>

      <Screenshots
        width="400px"
        data={[
          {
            image: childList,
            caption:
              'View and manage currently checked-in children and workers.',
          },
          {
            image: childDetail,
            caption:
              'Quickly access the information you need about the children in your care.',
          },
          {
            image: guardianDetail,
            caption: 'Instantly contact guardians via text or call.',
          },
          {
            image: dashboard,
            caption:
              'View at-a-glance check-in totals and location capacity information.',
          },
        ]}
      />
    </DefaultLayout>
  )
}

export default AdminConsole
