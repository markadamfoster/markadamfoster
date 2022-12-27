import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'gatsby'

import ProjectEntry from './ProjectEntry'
import photoInvoiceImg from 'assets/projects/covers/fp-photoinvoice.png'
import dailyAffirmImg from 'assets/projects/covers/fp-dailyaffirm.png'
import ViewAllButton from './ViewAllButton'

export default function ProjectsSection() {
  return (
    <Wrapper className="my-20">
      <Header>
        <h3>Latest Projects</h3>
        <div>
          <ViewAllButton to="/projects">All Projects</ViewAllButton>
        </div>
      </Header>
      <ul className="my-10">
        <ProjectEntry
          title="PhotoInvoice"
          summary="An invoicing platform for real estate photographers"
          description="A multi-year labor of love, and my biggest personal project to date. PhotoInvoice is a SaaS invoicing platform that lets photographers show watermarked sample photos and requiring payment before the client can download the finals."
          bg="#d6dde2"
          img={photoInvoiceImg}
          liveSiteUrl="https://www.photoinvoice.com"
          learnMoreUrl="/projects/photo-invoice"
        />
        <ProjectEntry
          title="DailyAffirm"
          summary="An iOS app for daily reviewing goals and affirmations"
          description="A simple and fun app to enourage reviewing your goals and affirmations every day. It had been awhile since I'd built and released a mobile app, and this helped scratch that itch. No backend for this project, just React Native and Expo, with data stored locally."
          bg="#fddfdb"
          img={dailyAffirmImg}
          liveSiteUrl="https://apps.apple.com/us/app/dailyaffirm-affirmations/id1589990222"
          learnMoreUrl=""
        />
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h3 {
    margin-top: 30px;
    font-size: 2rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const AllProjects = styled(Link)`
  /* font-weight: 600; */
  font-size: 16px;
  margin-left: 10px;
`

const LinkWrapper = styled.div`
  display: flex;
`
