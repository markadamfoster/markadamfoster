import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { colors } from 'src/Constants'

class FeaturedProjectListItem extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired,
  }

  render() {
    const { project } = this.props

    return (
      <Wrapper>
        <Left>
          <Cover src={project.cover} />
        </Left>
        <Right>
          <Title>{project.name}</Title>
          <Subtitle>
            {project.summary} (
            <Link to={`/projects/${project.slug}`}>Learn more</Link>)
          </Subtitle>
        </Right>
      </Wrapper>
    )
  }
}

export default FeaturedProjectListItem

const Wrapper = styled.div`
  display: flex;
  color: ${colors.textDark};

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const Left = styled.div`
  width: 40%;

  @media (max-width: 500px) {
    width: 100%;
  }
`

const Right = styled.div`
  width: 60%;
  padding: 0 20px;

  @media (max-width: 500px) {
    width: 100%;
    padding: 0;
  }
`

const Cover = styled.img`
  width: 100%;
  transition: transform 250ms;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
`

const Title = styled.div`
  font-size: 21px;
  font-weight: 900;
  margin-top: 5px;

  @media (max-width: 850px) {
    font-size: 20px;
  }

  @media (max-width: 700px) {
    font-size: 24px;
  }

  @media (max-width: 500px) {
    text-align: center;
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
