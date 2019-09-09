import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { projectData } from 'src/components/Projects/ProjectData'
import PortfolioItem from './_FeaturedProjectListItem.js'

function FeaturedProjectsList() {
  const projects = projectData.filter(project => project.featured)
  return (
    <ProjectsWrapper>
      {projects.map(project => {
        return <PortfolioItem key={project.slug} project={project} />
      })}
      <SeeAll>
        <Link to="/projects">See the full list of projects →</Link>
      </SeeAll>
    </ProjectsWrapper>
  )
}

export default FeaturedProjectsList

const ProjectsWrapper = styled.div`
  margin: 30px auto;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`

const SeeAll = styled.div`
  // text-align: center;
`
