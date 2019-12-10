import React, { Component } from 'react'
import styled from 'styled-components'

import { projectData } from 'components/Projects/ProjectData'
import PortfolioItem from './_ProjectListItem.js'

class ProjectsList extends Component {
  static propTypes = {}

  render() {
    return (
      <ProjectsWrapper>
        {projectData.map(project => {
          return <PortfolioItem key={project.slug} project={project} />
        })}
      </ProjectsWrapper>
    )
  }
}

export default ProjectsList

const ProjectsWrapper = styled.div`
  width: 1000px;
  max-width: 90%;
  margin: 60px auto;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`
