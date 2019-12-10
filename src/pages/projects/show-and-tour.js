import React from 'react'
import Helmet from 'react-helmet'

// Components
import DefaultLayout from 'layouts/DefaultLayout'
import Intro from 'components/Projects/ProjectSingle/IntroSection'
import Content from 'components/Projects/ProjectSingle/Content'
import ProjectLinks from 'components/Projects/ProjectSingle/ProjectLinks'
import Screenshots from 'components/Projects/ProjectSingle/ScreenshotSection'
import { projectData } from 'components/Projects/ProjectData'

// Screenshots
import ss01 from 'assets/projects/ShowAndTour/st-01.jpg'
import ss02 from 'assets/projects/ShowAndTour/st-02.jpg'
import ss03 from 'assets/projects/ShowAndTour/st-03.jpg'
import ss04 from 'assets/projects/ShowAndTour/st-04.jpg'
import ss05 from 'assets/projects/ShowAndTour/st-05.jpg'

const ShowAndTour = () => {
  const project = projectData.find(project => project.slug === 'show-and-tour')

  return (
    <DefaultLayout>
      <Helmet title="Project: Show & Tour" />

      <Intro project={project} />

      <Content>
        <p>
          Photographers can log in, create a new tour, enter the home’s
          information, upload photos, and choose a tour theme. There are also
          various other settings and features, including lead capture forms,
          photo credits, and more. This virtual tour can then be sold or given
          to the real estate agent listing the home for marketing purposes.
        </p>

        <p>
          I began work on Show and Tour in March of 2014. It has served as an
          excellent sample project to flesh out many of the web development
          skills I’d been gaining from studying online resources. I needed a
          sandbox to put concepts into practice, and Show &amp; Tour was just
          that.
        </p>

        <strong>Key technical aspects:</strong>
        <ul>
          <li>Built with Ruby on Rails (and Bootstrap)</li>
          <li>database design and implementation with PostgreSQL</li>
          <li>
            integration with Stripe for payment processing (subscription and per
            tour options)
          </li>
          <li>
            CSS &amp; JS management of multiple active themes (for sales pages
            &amp; tour theme options)
          </li>
          <li>intuitive tour creation with user-friendly design</li>
          <li>
            multiple, simultaneous image uploads and processing, done via a
            background process
          </li>
          <li>
            cookie-based lead generation modals with optional email
            notifications
          </li>
        </ul>

        <ProjectLinks
          liveSite="https://www.showandtour.com/"
          code="https://github.com/foster154/tour_app"
        />
      </Content>

      <Screenshots
        data={[
          {
            image: ss01,
            caption: 'The front introduction and sales page.',
          },
          {
            image: ss02,
            caption:
              "A sample virtual tour page, showing a property's photos, description, map, and more.",
          },
          {
            image: ss03,
            caption:
              'Another sample virtual tour page, displaying the property in another theme option.',
          },
          {
            image: ss04,
            caption: 'The dashboard, showing recently created tours.',
          },
          {
            image: ss05,
            caption:
              'The tour edit page, where details and photos can be updated and managed.',
          },
        ]}
      />
    </DefaultLayout>
  )
}

export default ShowAndTour
