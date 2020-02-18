import React from 'react'
import styled from 'styled-components'

import { OutlineLinkButton, PrimaryLinkButton } from 'styles/Buttons'
import { projectData } from 'components/Projects/ProjectData'
import PortfolioItem from './PortfolioItem'

function PortfolioSection() {
  const projects = projectData.filter(project => project.featured)

  return (
    <ProjectsWrapper>
      {projects.map(project => {
        return <PortfolioItem key={project.slug} project={project} />
      })}
      <SeeAll>
        <PrimaryLinkButton style={{ marginRight: 10 }} to="/contact">
          Hire Me
        </PrimaryLinkButton>
        <OutlineLinkButton to="/projects">More projects →</OutlineLinkButton>
      </SeeAll>
    </ProjectsWrapper>
  )
}

export default PortfolioSection

const ProjectsWrapper = styled.div`
  margin: 4vw 0;
`

const SeeAll = styled.div`
  margin-top: 4vw;
  text-align: center;

  @media (max-width: 600px) {
    margin-top: 0px;
  }
`
