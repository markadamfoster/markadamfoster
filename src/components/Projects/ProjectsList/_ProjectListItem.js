import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

import TechBadges from '../ProjectsShared/TechBadges'
import { colors } from 'src/Constants'

class PortfolioListItem extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired,
  }

  render() {
    const { project } = this.props

    return (
      <Wrapper to={`/projects/${project.slug}`}>
        <Cover src={project.cover} />
        <Info>
          <Title>{project.name}</Title>
          <Subtitle>{project.summary}</Subtitle>
          <Tech>Built With:</Tech>
          <TechBadges badges={project.badges} size={36} />
        </Info>
      </Wrapper>
    )
  }
}

export default PortfolioListItem

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #e4e0e0;
  transition: transform 0.3s;
  color: ${colors.textDark};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    transform: scale(1.02);
    color: ${colors.textDark};
  }

  &:active {
    transform: scale(0.98);
    color: ${colors.textDark};
  }
`

const Cover = styled.img`
  width: 100%;
  transition: transform 250ms;
`

const Info = styled.div`
  flex: 1;
  padding: 10px 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled.div`
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  font-size: 24px;
  margin-top: 5px;

  @media (max-width: 850px) {
    font-size: 20px;
  }

  @media (max-width: 700px) {
    font-size: 24px;
  }
`

const Subtitle = styled.div`
  flex: 1;
  text-align: left;
  margin: 14px 0;
  font-size: 16px;
  color: #474747;
`

const Tech = styled.div`
  font-size: 12px;
  margin-bottom: -6px;
  color: #a9a9a9;
  text-align: center;
`
