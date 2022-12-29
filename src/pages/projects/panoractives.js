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
import ssFront from 'assets/projects/Panoractives/pano-frontpage.jpg'
import ssPhotography from 'assets/projects/Panoractives/pano-photography.jpg'
import ssTour from 'assets/projects/Panoractives/pano-tour.jpg'

export const Head = () => <SEO title="Panoractives" />

const Panoractives = () => {
  const project = projectData.find((project) => project.name === 'Panoractives')

  return (
    <DefaultLayout>
      <Intro project={project} />

      <Content>
        <p>
          Panoractives is a real estate photography and 3D virtual tour
          provider.
        </p>

        <p>
          We pride ourselves on our gorgeous photography, fantastic service, and
          use of the latest imaging technology. We work hard to continually
          innovate the concept of the virtual tour, using 3D walkthrough and
          video technology perfect for real estate agents wanting an impressive
          web presence for their listings.
        </p>

        <p>
          As co-founder, I've done all web development work, pioneered new
          combinations of photography and web development tools for product
          creation, as well as head our marketing efforts.
        </p>

        <p>Key technical aspects of the project:</p>
        <ul>
          <li>WordPress site creation, including customized child theme</li>
          <li>
            virtual tour theme creation, including integration with maps, photo
            galleries, and 360º panoramas
          </li>
          <li>custom scripting to automate photo processing workflow</li>
          <li>Google analytics and SEO management</li>
        </ul>

        <ProjectLinks liveSite="http://www.panoractives.com" />
      </Content>

      <Screenshots
        data={[
          {
            image: ssFront,
            caption: 'The front page.',
          },
          {
            image: ssPhotography,
            caption: 'The real estate photography detail page.',
          },
          {
            image: ssTour,
            caption:
              'A sample virtual tour featuring a 360º panorama with hotspots.',
          },
        ]}
      />
    </DefaultLayout>
  )
}

export default Panoractives
