import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

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
        <Link to="/projects">See more projects →</Link>
      </SeeAll>
    </ProjectsWrapper>
  )
}

export default PortfolioSection

const ProjectsWrapper = styled.div``

const SeeAll = styled.div`
  margin-top: 60px;

  @media (max-width: 600px) {
    margin-top: 0px;
  }
`
