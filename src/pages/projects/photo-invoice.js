import React from 'react'

// Components
import DefaultLayout from 'layouts/DefaultLayout'
import SEO from 'components/Shared/SEO'
import Intro from 'components/Projects/ProjectSingle/IntroSection'
import Content from 'components/Projects/ProjectSingle/Content'
import ProjectLinks from 'components/Projects/ProjectSingle/ProjectLinks'
import { projectData } from 'components/Projects/ProjectData'

export const Head = () => <SEO title="PhotoInvoice" />

const PhotoInvoice = () => {
  const project = projectData.find(
    (project) => project.name === 'Photo Invoice'
  )

  return (
    <DefaultLayout>
      <Intro project={project} />

      <Content>
        <p>
          This is a true labor of love. At the time I began development, I owned
          a real estate photography company and simply got fed up with not
          getting paid very quickly. While there were a few great clients who
          would pay for the photos we sent them immediately, most would pay
          whenever they got around to it, often weeks (or months!) later.
        </p>

        <p>
          Searching the related forums and Facebook groups, I found a few people
          where were manually requiring the invoice to be paid before they would
          send over the photos. I liked this idea, but I didn’t like having to
          send extra emails. I wanted fewer tasks on my plate, not more. There
          were a few other people who had created workarounds with other photo
          hosting systems, but nothing that was really geared to be quick and
          easy for real estate photographers.
        </p>

        <p>Enter me and my nights and weekends. 🤓</p>
        <p>
          The product is straightforward: it allows the photographer to create
          an invoice, and then add as many “deliverables” as needed (photos,
          links, etc). When they send the invoice to their client, the client is
          prompted to submit payment, and then immediately after payment has
          been received the deliverables are made available.
        </p>
        <p>
          After a couple months of successful beta testing with my own company,
          I’m now opening the platform up to others, and working hard to get the
          word out.
        </p>
        <ProjectLinks liveSite="http://www.photoinvoice.com/" />
      </Content>
    </DefaultLayout>
  )
}

export default PhotoInvoice
